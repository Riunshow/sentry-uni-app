import {_subscribe, StackTrace as TraceKitStackTrace} from '../tracekit'
import {
  addExceptionTypeValue,
  isError,
  isString,
  logger,
  normalize,
  truncate,
} from '@sentry/utils'
import {
  captureEvent,
  captureException,
  captureMessage,
  getCurrentHub,
  withScope,
} from '@sentry/core'
import {Event, Integration} from '@sentry/types'
import {eventFromStacktrace} from '../parsers'
import {globalErrorFingerprint, shouldIgnoreOnError} from '../helpers'

import {getSDK} from '../crossPlatform'

const sdk = getSDK()

/** JSDoc */
interface GlobalHandlersIntegrations {
  onerror: boolean,
  onpagenotfound: boolean,
}

/** Global handlers */
export class GlobalHandlers implements Integration {
  /**
   * @inheritDoc
   */
  public name: string = GlobalHandlers.id

  /**
   * @inheritDoc
   */
  public static id: string = 'GlobalHandlers'

  /** JSDoc */
  private readonly _options: GlobalHandlersIntegrations

  /** JSDoc */
  public constructor(options?: GlobalHandlersIntegrations) {
    this._options = {
      onerror: true,
      onpagenotfound: true,
      ...options,
    }
  }

  /**
   * @inheritDoc
   */
  public setupOnce(): void {
    Error.stackTraceLimit = 50

    _subscribe((stack: TraceKitStackTrace, _: boolean, error: Error) => {
      if (shouldIgnoreOnError()) {
        return
      }
      const self = getCurrentHub().getIntegration(GlobalHandlers)
      if (self) {
        getCurrentHub().captureEvent(self._eventFromGlobalHandler(stack), {
          data: {stack},
          originalException: error,
        })
      }
    })

    if (this._options.onerror) {
      logger.log('Global Handler attached: onerror')
      this._installGlobalErrorHandler()
    }

    if (this._options.onpagenotfound) {
      logger.log('Global Handler attached: onpagenotfound')
      this._installGlobalPageNotFoundHandler()
    }

    if (sdk.onError) {
      logger.log('Global Handler attached: onError')
      sdk.onError((error: string) => {
        console.info('sentry-miniapp', error)
        captureException(new Error(error))
      })
    }

    if (sdk.onPageNotFound) {
      logger.log('Global Handler attached: onPageNotFound')
      sdk.onPageNotFound((res: object) => {
        captureMessage(`页面无法找到: ${JSON.stringify(res)}`)
      })
    }

    if (sdk.onMemoryWarning) {
      logger.log('Global Handler attached: onMemoryWarning')
      sdk.onMemoryWarning(({level}: { level: number }) => {
        let levelString = 'iOS 设备, 无 level 传入.'
        switch (level) {
          case 10:
            levelString = 'Android 设备, level = TRIM_MEMORY_RUNNING_LOW'
            break
          case 15:
            levelString = 'Android 设备, level = TRIM_MEMORY_RUNNING_CRITICAL'
            break
          default:
            return
        }
        captureMessage(`内存不足告警: ${levelString}`)
      })
    }
  }

  private _installGlobalErrorHandler() {
    if (sdk.onError) {
      sdk.onError((msg: any) => {
        withScope((scope: any) => {
          const fingerprint = globalErrorFingerprint(msg)
          let error
          if (fingerprint) {
            scope.setFingerprint(fingerprint)
          }
          if (!isError(msg)) {
            if (fingerprint) {
              const errorType = fingerprint[0] || 'UnknownAppError'
              const errorMessage = fingerprint[1] || errorType
              error = new Error(errorMessage)
              error.name = errorType
              error.stack = msg
            } else {
              error = new Error('UnknownAppError')
              error.stack = msg
            }
          } else {
            error = msg
          }
          captureException(error)
        })
      })
    }
  }

  private _installGlobalPageNotFoundHandler() {
    if (sdk.onPageNotFound) {
      sdk.onPageNotFound((res: any) => {
        captureEvent({
          message: 'page not found',
          extra: res,
        })
      })
    }
  }

  /**
   * This function creates an Event from an TraceKitStackTrace.
   *
   * @param stacktrace TraceKitStackTrace to be converted to an Event.
   */
  private _eventFromGlobalHandler(stacktrace: TraceKitStackTrace): Event {
    if (
      !isString(stacktrace.message)
      && stacktrace.mechanism !== 'onunhandledrejection'
    ) {
      // There are cases where stacktrace.message is an Event object
      // https://github.com/getsentry/sentry-javascript/issues/1949
      // In this specific case we try to extract stacktrace.message.error.message
      const message = (stacktrace.message as unknown) as any
      stacktrace.message
        = message.error && isString(message.error.message)
          ? message.error.message
          : 'No error message'
    }
    const event = eventFromStacktrace(stacktrace)

    const data: { [key: string]: string } = {
      mode: stacktrace.mode,
    }

    if (stacktrace.message) {
      data.message = stacktrace.message
    }

    if (stacktrace.name) {
      data.name = stacktrace.name
    }

    const client = getCurrentHub().getClient()
    const maxValueLength
      = (client && client.getOptions().maxValueLength) || 250

    const fallbackValue = stacktrace.original
      ? truncate(JSON.stringify(normalize(stacktrace.original)), maxValueLength)
      : ''
    const fallbackType
      = stacktrace.mechanism === 'onunhandledrejection'
        ? 'UnhandledRejection'
        : 'Error'

    // This makes sure we have type/value in every exception
    addExceptionTypeValue(event, fallbackValue, fallbackType)

    return event
  }
}

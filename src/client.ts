import {BaseClient, Scope} from '@sentry/core'
import {DsnLike, Event, EventHint} from '@sentry/types'

import {MiniprogramBackend, MiniprogramOptions} from './backend'
import {SDK_NAME, SDK_VERSION} from './version'

/**
 * All properties the report dialog supports
 */
export interface ReportDialogOptions {
  [key: string]: any,
  eventId?: string,
  dsn?: DsnLike,
  user?: {
    email?: string,
    name?: string,
  },
  lang?: string,
  title?: string,
  subtitle?: string,
  subtitle2?: string,
  labelName?: string,
  labelEmail?: string,
  labelComments?: string,
  labelClose?: string,
  labelSubmit?: string,
  errorGeneric?: string,
  errorFormEntry?: string,
  successMessage?: string,
  /** Callback after reportDialog showed up */
  onLoad?(): void,
}

/**
 * The Sentry Browser SDK Client.
 *
 * @see BrowserOptions for documentation on configuration options.
 * @see SentryClient for usage documentation.
 */
export class MiniprogramClient extends BaseClient<MiniprogramBackend, MiniprogramOptions> {
  /**
   * Creates a new Browser SDK instance.
   *
   * @param options Configuration options for this SDK.
   */
  public constructor(options: MiniprogramOptions = {}) {
    super(MiniprogramBackend, options)
  }

  /**
   * @inheritDoc
   */
  protected _prepareEvent(event: Event, scope?: Scope, hint?: EventHint): PromiseLike<Event | null> {
    event.platform = event.platform || 'javascript'
    event.sdk = {
      ...event.sdk,
      name: SDK_NAME,
      packages: [
        ...((event.sdk && event.sdk.packages) || []),
        {
          name: 'npm:sentry-uni-app',
          version: SDK_VERSION,
        },
      ],
      version: SDK_VERSION,
    }

    return super._prepareEvent(event, scope, hint)
  }

  /**
   * Show a report dialog to the user to send feedback to a specific event.
   *
   * @param options Set individual options for the dialog
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public showReportDialog(options: ReportDialogOptions = {}): void {
    // not supported
  }
}

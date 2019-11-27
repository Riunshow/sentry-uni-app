import {Event, Response, Status} from '@sentry/types'

import {BaseTransport} from './base'

import {getSDK} from '../crossPlatform'

const sdk = getSDK()

/** `sdk.request` based transport */
export class RequestTransport extends BaseTransport {
  /**
   * @inheritDoc
   */
  public sendEvent(event: Event): PromiseLike<Response> {
    return this._buffer.add(
      new Promise<Response>((resolve, reject) => {
        sdk.request({
          url: this.url,
          method: 'POST',
          data: JSON.stringify(event),
          header: {
            'content-type': 'application/json',
          },
          success(res: { statusCode: number }): void {
            resolve({
              status: Status.fromHttpCode(res.statusCode),
            })
          },
          fail(error: object): void {
            reject(error)
          },
        })
      }),
    )
  }
}

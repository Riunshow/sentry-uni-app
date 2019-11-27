import { Event, Response, Status } from '@sentry/types'

import { BaseTransport } from './base'

import { getSDK } from '../crossPlatform'

const sdk = getSDK()

/** `sdk.request` based transport */
export class RequestTransport extends BaseTransport {
  /**
   * @inheritDoc
   */
  public sendEvent(event: Event): Promise<Response> {
    return this._buffer.add(
      new Promise<Response>((resolve, reject) => {
        sdk.request({
          url: this.url,
          method: 'POST',
          data: event,
          success(res: any) {
            if (res.statusCode === 200) {
              resolve({
                status: Status.fromHttpCode(res.statusCode),
              })
            } else {
              reject(res)
            }
          },
          fail(err: any) {
            reject(err)
          },
        })
      }),
    )
  }
}

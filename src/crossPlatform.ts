declare const uni: any
declare const wx: any
declare const my: any
declare const tt: any

/**
 * 小程序平台 SDK 接口
 */
interface SDK {
  request: Function,
  getSystemInfo: Function,
  getLaunchOptionsSync: Function,
  getAccountInfoSync: Function,
  onAppShow?: Function,
  onAppHide?: Function,
  onError?: Function,
  onPageNotFound?: Function,
  onMemoryWarning?: Function,
}

/**
 * 获取跨平台的 SDK
 */
const getSDK = () => {
  let sdk: SDK = {
    request: () => {},
    getSystemInfo: () => {},
    getLaunchOptionsSync: () => {},
    getAccountInfoSync: () => {},
  }

  if (typeof uni === 'object') {
    sdk = uni
  } else if (typeof wx === 'object') {
    // 微信平台
    sdk = wx
  } else if (typeof my === 'object') {
    // 支付宝平台
    sdk = my
  } else if (typeof tt === 'object') {
    // 字节跳动平台
    sdk = tt
  } else {
    console.log('sentry-uni-app 暂不支持此平台')
  }

  return sdk
}

export { getSDK }

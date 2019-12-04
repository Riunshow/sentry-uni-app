# sentry-uni-app
base @sentry/browser


## 使用
```bash
npm i 
npm run build
# or
yarn
yarn build
```

```js
// 创建文件 logger.js, 写入以下内容
import * as Sentry from './dist/index.js'

Sentry.init({
  dsn: '*****'
})

// 在 uni-app 项目中的 main.js 引入 logger.js
import './logger.js'
import * as logger from './dist/index.js'

Vue.prototype.$logger = logger
```
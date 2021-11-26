# taro-plugin-pinia
[`Taro & vue3`](https://taro-docs.jd.com/taro/docs/vue3) 支持使用 [`Pinia`](https://pinia.esm.dev/) 进行状态管理的插件

## 安装

安装 `pinia`

```bash
yarn add pinia
# or with npm
npm install pinia
```

安装 `taro-plugin-pinia` 插件

```bash
yarn add taro-plugin-pinia
# or with npm
npm install taro-plugin-pinia
```

## 配置

项目配置文件 `config/index.js` 中配置:

```javascript
// ...
plugins: [
  'taro-plugin-pinia'
]
// ...
```

## 使用

引入
```javascript
// src/app.js

// ...

import { createPinia } from 'pinia'

App.use(createPinia())
```

[`Pinia` 具体使用方法，请参考官网](https://pinia.esm.dev/core-concepts/)

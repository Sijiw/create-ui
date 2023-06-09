# Create-UI🎨

一个用TypeScript编写的Vue3组件库。

Create，意为创作、创造，项目名字的寓意也是希望这些组件能够创造出美好的作品。

[组件库文档站链接](https://sijiw.github.io/create-ui/)

> :grey_exclamation: Create-UI前身为字节跳动第五届青训营项目-Youth-UI，项目代码以及文档站也是由Youth-UI自己编写的部分迁移而来，代码和文档还存在Youth-UI的痕迹。

## 目前阶段

目前拥有10个以上的组件，处于表单类型组件dev阶段，项目结构管理还存在不完善的地方。

## 计划

预计在扩充组件数量为20个左右之后会发布npm包，并且加入按需引入等功能。

## 使用

克隆`dist` 分支下的代码，将dist放入项目中
在`main.ts` 中引入

```vue
import { createApp } from 'vue'
import App from './App.vue'

import create-ui from '../dist/youth-ui.es'
import '../dist/style.css'

const app = createApp(App)
app.use(router).use(create-ui)
app.mount('#app')
```

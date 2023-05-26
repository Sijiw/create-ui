import DefaultTheme from 'vitepress/theme'
import CreateUI from '../../../dist/create-ui.es'
import '../../../dist/style.css'
import '../styles/common.css'

import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    app.use(CreateUI)
    app.component('demo-preview', ElementPlusContainer)
  }
}

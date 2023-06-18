import DefaultTheme from 'vitepress/theme'
import CreateUI from '../../../dist/index.es'
import '../../../dist/style.css'
import '../styles/common.css'
import PropsTable from '../components/props-table.vue'
import SlotsTable from '../components/slots-table.vue'

import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

import '../styles/theme.css'

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    app.use(CreateUI)
    app.component('demo-preview', ElementPlusContainer)
    app.component('props-table', PropsTable)
    app.component('slots-table', SlotsTable)
  }
}

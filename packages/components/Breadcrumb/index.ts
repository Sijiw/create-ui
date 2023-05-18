import { App, Plugin } from 'vue'
import Breadcrumb from './src/breadcrumb.vue'

export const BreadcrumbPlugin: Plugin = {
  install(app: App) {
    app.component('CBreadcrumb', Breadcrumb)
  }
}

export default BreadcrumbPlugin

export { Breadcrumb }

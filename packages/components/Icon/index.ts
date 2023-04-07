import { App, Plugin } from 'vue'
import CIcon from './src/icon.vue'

export const IconPlugin: Plugin = {
  install(app: App) {
    app.component('CIcon', CIcon)
  }
}

export { CIcon }

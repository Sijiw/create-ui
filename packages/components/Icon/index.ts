import { App, Plugin } from 'vue'
import YIcon from './src/icon.vue'

export const IconPlugin: Plugin = {
  install(app: App) {
    app.component('CIcon', YIcon)
  }
}

export { YIcon }

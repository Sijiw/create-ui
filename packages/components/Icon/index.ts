import { App, Plugin } from 'vue'
import YIcon from 'packages/components/Icon/src/icon.vue'

export const IconPlugin: Plugin = {
  install(app: App) {
    app.component('CIcon', YIcon)
  }
}

export { YIcon }

import { App, Plugin } from 'vue'
import Radio from './src/radio.vue'

export const RadioPlugin: Plugin = {
  install(app: App) {
    app.component('CRadio', Radio)
  }
}

export { Radio }

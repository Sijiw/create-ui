import { App, Plugin } from 'vue'
import input from './src/input.vue'

export const InputPlugin: Plugin = {
  install(app: App) {
    app.component('CInput', input)
  }
}

export { input }

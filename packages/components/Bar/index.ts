import { App, Plugin } from 'vue'
import Bar from './src/bar.vue'

export const BarPlugin: Plugin = {
  install(app: App) {
    app.component('CBar', Bar)
  }
}

export default BarPlugin

export { Bar }

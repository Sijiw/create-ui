import { App, Plugin } from 'vue'
import Switch from './src/switch.vue'

export const SwitchPlugin: Plugin = {
  install(app: App) {
    app.component('CSwitch', Switch)
  }
}

export { Switch }
export * from './src/switch'

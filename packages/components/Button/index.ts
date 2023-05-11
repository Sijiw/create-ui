import { App, Plugin } from 'vue'
import Button from './src/index.vue'
import { ButtonInstance } from './src/instance'

export const ButtonPlugin: Plugin = {
  install(app: App) {
    app.component('CButton', Button)
  }
}

export default ButtonPlugin

export { Button }
export * from './src/button'
export type { ButtonInstance }

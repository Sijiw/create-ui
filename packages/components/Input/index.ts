import { App, Plugin } from 'vue'
import Input from './src/input.vue'

export const InputPlugin: Plugin = {
  install(app: App) {
    app.component('CInput', Input)
  }
}

export default InputPlugin

export { Input }

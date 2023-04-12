import { App, Plugin } from 'vue'
import Checkbox from './src/checkbox.vue'

export const CheckboxPlugin: Plugin = {
  install(app: App) {
    app.component('CCheckbox', Checkbox)
  }
}

export { Checkbox }

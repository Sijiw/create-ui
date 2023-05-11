import { App, Plugin } from 'vue'
import CheckboxGroup from './src/checkbox-group.vue'

export const CheckboxGroupPlugin: Plugin = {
  install(app: App) {
    app.component('CCheckboxGroup', CheckboxGroup)
  }
}

export default CheckboxGroupPlugin

export { CheckboxGroup }

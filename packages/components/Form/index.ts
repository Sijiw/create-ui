import { App, Plugin } from 'vue'
import Form from './src/form.vue'

export const FormPlugin: Plugin = {
  install(app: App) {
    app.component('CForm', Form)
  }
}

export default FormPlugin

export { Form }

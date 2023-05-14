import { App, Plugin } from 'vue'
import Form from './src/form.vue'
import FormItem from './src/form-item.vue'

export const FormPlugin: Plugin = {
  install(app: App) {
    app.component('CForm', Form)
    app.component('CFormItem', FormItem)
  }
}

export default FormPlugin

export { Form, FormItem }

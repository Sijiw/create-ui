import { App, Plugin } from 'vue'
import Form from './src/form.vue'
import FormItem from './src/form-item.vue'

export const FormPlugin: Plugin = {
  install(app: App) {
    app.component('CForm', Form)
    app.component('CFormItem', FormItem)
  }
}

export * from './src/form'
export * from './src/form-item'

export default FormPlugin

export type FormInstance = InstanceType<typeof Form>
export type FormItemInstance = InstanceType<typeof FormItem>

export { Form, FormItem }

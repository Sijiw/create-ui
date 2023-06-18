import { App, Plugin } from 'vue'
import {{ compName }} from './src/{{ compClassName }}.vue'

export const {{ compName }}Plugin: Plugin = {
  install(app: App) {
    app.component('C{{ compName }}', {{ compName }})
  }
}

export default {{ compName }}Plugin

export { {{ compName }} }

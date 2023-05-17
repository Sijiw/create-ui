import { App, Plugin } from 'vue'
import Link from './src/link.vue'

export const LinkPlugin: Plugin = {
  install(app: App) {
    app.component('CLink', Link)
  }
}

export default LinkPlugin

export { Link }

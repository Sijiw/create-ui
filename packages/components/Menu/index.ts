import { App, Plugin } from 'vue'
import Menu from './src/menu.vue'

export const MenuPlugin: Plugin = {
  install(app: App) {
    app.component('CMenu', Menu)
  }
}

export default MenuPlugin

export { Menu }

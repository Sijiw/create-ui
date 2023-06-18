import { App, Plugin } from 'vue'
import Menu from './src/menu.vue'
import SubMenu from './src/sub-menu.vue'
import MenuItem from './src/menu-item.vue'

export const MenuPlugin: Plugin = {
  install(app: App) {
    app.component('CMenu', Menu)
    app.component('CSubMenu', SubMenu)
    app.component('CMenuItem', MenuItem)
  }
}

export * from './src/menu'
export * from './src/menu-item'
export * from './src/sub-menu'

export default MenuPlugin

export { Menu, SubMenu, MenuItem }

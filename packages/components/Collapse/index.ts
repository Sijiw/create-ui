import { App, Plugin } from 'vue'
import Collapse from './src/collapse.vue'
import CollapseItem from './src/collapse-item.vue'

export const CollapsePlugin: Plugin = {
  install(app: App) {
    app.component('CCollapse', Collapse)
    app.component('CCollapseItem', CollapseItem)
  }
}

export default CollapsePlugin

export { Collapse, CollapseItem }

import { App, Plugin } from 'vue'
import row from './src/row.vue'
import col from './src/col.vue'

export const GridPlugin: Plugin = {
  install(app: App) {
    app.component('CCol', col)
    app.component('CRow', row)
  }
}

export { row, col }

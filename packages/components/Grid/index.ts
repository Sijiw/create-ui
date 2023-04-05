import { App, Plugin } from 'vue'
import Row from './src/row.vue'
import Col from './src/col.vue'

export const GridPlugin: Plugin = {
  install(app: App) {
    app.component('CCol', Col)
    app.component('CRow', Row)
  }
}

export { Row, Col }

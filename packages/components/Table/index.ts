import { App, Plugin } from 'vue'
import Table from './src/table.vue'
import TableColumn from './src/table-column.vue'

export const TablePlugin: Plugin = {
  install(app: App) {
    app.component('CTable', Table)
    app.component('CTableColumn', TableColumn)
  }
}

export default TablePlugin

export { Table, TableColumn }

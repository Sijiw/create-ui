import { App, Plugin } from 'vue'
import Card from './src/card.vue'

export const CardPlugin: Plugin = {
  install(app: App) {
    app.component('CCard', Card)
  }
}

export default CardPlugin

export { Card }

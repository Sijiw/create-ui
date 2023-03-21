import { App, Plugin } from 'vue'
import Container from './container.vue'
import Aside from './aside.vue'
import Header from './header.vue'
import Main from './main.vue'
import Footer from './footer.vue'

export const ContainerPlugin: Plugin = {
  install(app: App) {
    app.component('CContainer', Container)
    app.component('CAside', Aside)
    app.component('CHeader', Header)
    app.component('CMain', Main)
    app.component('CFooter', Footer)
  }
}

export { Container, Aside, Header, Main, Footer }

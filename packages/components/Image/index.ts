import { App, Plugin } from 'vue'
import Image from './src/image.vue'

export const ImagePlugin: Plugin = {
  install(app: App) {
    app.component('CImage', Image)
  }
}

export default ImagePlugin

export { Image }

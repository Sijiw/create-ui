/* eslint-disable */

import { App, Plugin } from 'vue'
import 'packages/styles/common.css'
import 'packages/styles/theme/theme.less'
import 'packages/styles/theme/color.less'
import { Icon } from '@iconify/vue'

import { ButtonPlugin } from './components/Button'
import { FooPlugin } from './components/Foo'
import { ProgressPlugin } from './components/Progress'
import { AvatarPlugin } from './components/Avatar'
import { DatePickerPlugin } from './components/DatePicker'
import { IconPlugin } from './components/Icon'
import { ContainerPlugin } from './components/Container'
import { GridPlugin } from './components/Grid'
import { InputPlugin } from './components/Input'
import { RadioPlugin } from './components/Radio'

const YouthUIPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app)
    FooPlugin.install?.(app)
    ProgressPlugin.install?.(app)
    AvatarPlugin.install?.(app)
    DatePickerPlugin.install?.(app)
    IconPlugin.install?.(app)
    ContainerPlugin.install?.(app)
    GridPlugin.install?.(app)
    InputPlugin.install?.(app)
    RadioPlugin.install?.(app)
    app.component('Icon', Icon)
  }
}

export default YouthUIPlugin

export * from './components/Button'
export * from './components/Foo'
export * from './components/Progress'
export * from './components/Avatar'
export * from './components/DatePicker'
export * from './components/Icon'
export * from './components/Container'
export * from './components/Grid'
export * from './components/Input'
export * from './components/Radio'

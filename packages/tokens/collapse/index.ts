import { InjectionKey, Ref } from 'vue'
import { CollapseProps } from 'packages/components/Collapse/src/collapse'

export type CollapseInjectionKey = CollapseProps & {
  activeKey: string
  changeActiveKey: (key: string) => void
}

export const collapseInjectionKey: InjectionKey<CollapseInjectionKey> =
  Symbol('collapseInjection')

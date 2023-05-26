import type {
  MenuProps,
  SubMenuProps,
  MenuItemProps
} from 'packages/components/Menu'
import { InjectionKey } from 'vue'

export type MenuContext = MenuProps & {
  activeIndex: string
  changeActiveIndex: (index: string) => void
}

export type SubMenuContext = SubMenuProps & {
  level: number
  padding: number
  open: boolean
}

export const menuInjectionKey: InjectionKey<MenuContext> =
  Symbol('menuInjectionKey')

export const subMenuInjectionKey: InjectionKey<SubMenuContext> = Symbol(
  'subMenuInjectionKey'
)

export type PropsType = {
  props: string
  description: string
  type: string
  default: string
}

export type Props = PropsType[]

export const propColumns: PropsType = {
  props: '属性名',
  description: '说明',
  type: '类型',
  default: '默认值'
}

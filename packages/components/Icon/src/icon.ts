import { ExtractPropTypes, PropType } from 'vue'

export type IconProps = ExtractPropTypes<typeof iconProps>
export const iconProps = {
  color: {
    type: String
  },
  size: {
    type: [String, Number] as PropType<string | number>
  },
  icon: {
    type: String
  },
  clickable: {
    type: Boolean,
    default: false
  },
  hoverColor: {
    type: String
  }
} as const

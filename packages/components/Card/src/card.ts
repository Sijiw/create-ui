import { CSSProperties, ExtractPropTypes, PropType } from 'vue'

export type CardProps = ExtractPropTypes<typeof cardProps>
export const cardProps = {
  shadow: {
    type: String,
    values: ['always', 'hover', 'never'],
    default: 'always'
  },
  bodyStyle: {
    type: Object as PropType<CSSProperties>
  },
  clickable: {
    type: Boolean
  }
} as const

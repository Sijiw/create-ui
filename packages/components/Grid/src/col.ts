import { ExtractPropTypes } from 'vue'

export type ColProps = ExtractPropTypes<typeof colProps>
export const colProps = {
  span: {
    type: Number,
    default: 24
  },
  offset: {
    type: Number
  }
}

import { ExtractPropTypes } from 'vue'

export type RawProps = ExtractPropTypes<typeof rawProps>
export const rawProps = {
  gutter: {
    type: Number
  },
  justify: {
    type: String,
    values: ['end', 'center', 'space-around', 'space-between', 'space-evenly'],
    default: 'start'
  }
}

import { ExtractPropTypes } from 'vue'

export type FormItemProps = ExtractPropTypes<typeof formItemProps>
export const formItemProps = {
  label: {
    type: String,
    required: true
  },
  required: {
    type: Boolean
  },
  labelPosition: {
    type: String,
    values: ['start', 'end', 'top'],
    default: 'start'
  }
} as const

import type { ExtractPropTypes, PropType } from 'vue'

export type FormItemProps = ExtractPropTypes<typeof formItemProps>
export const formItemProps = {
  label: {
    type: String
  },
  prop: {
    type: String
  },
  required: {
    type: Boolean
  },
  labelPosition: {
    type: String,
    values: ['start', 'end', 'top'],
    default: 'start'
  },
  trigger: {
    type: Array as PropType<Array<'change' | 'input' | 'blur'>>
    // values: ['change', 'input']
  }
} as const

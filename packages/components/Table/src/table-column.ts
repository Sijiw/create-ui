import { ExtractPropTypes, PropType } from 'vue'

export type TableColumnProps = ExtractPropTypes<typeof tableColumnProps>
export const tableColumnProps = {
  prop: {
    type: String,
    required: true
  },
  label: {
    type: String
  },
  width: {
    type: [String, Number] as PropType<string | number>
  },
  height: {
    type: [String, Number] as PropType<string | number>
  }
} as const

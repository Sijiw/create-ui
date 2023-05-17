import { ExtractPropTypes, PropType } from 'vue'

export type TableProps = ExtractPropTypes<typeof tableProps>
export const tableProps = {
  data: {
    type: Array as PropType<any[]>
  },
  height: {
    type: [String, Number] as PropType<string | number>
  }
} as const

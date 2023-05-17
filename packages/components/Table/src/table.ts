import { ExtractPropTypes, PropType } from 'vue'

export type TableProps = ExtractPropTypes<typeof tableProps>
export const tableProps = {
  data: {
    type: Array as PropType<any[]>
  }
} as const

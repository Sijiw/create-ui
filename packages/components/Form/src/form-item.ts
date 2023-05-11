import { ExtractPropTypes } from 'vue'

export type FormItemProps = ExtractPropTypes<typeof formItemProps>
export const formItemProps = {
  label: {
    type: String
  }
} as const

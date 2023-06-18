import { ExtractPropTypes } from 'vue'

export type MenuProps = ExtractPropTypes<typeof menuProps>
export const menuProps = {
  type: {
    type: String
  }
} as const

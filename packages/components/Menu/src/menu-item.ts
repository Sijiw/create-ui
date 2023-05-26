import { ExtractPropTypes } from 'vue'

export type MenuItemProps = ExtractPropTypes<typeof menuItemProps>
export const menuItemProps = {
  index: {
    type: String,
    required: true
  }
} as const

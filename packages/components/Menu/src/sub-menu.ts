import { ExtractPropTypes } from 'vue'

export type SubMenuProps = ExtractPropTypes<typeof subMenuProps>
export const subMenuProps = {
  type: {
    type: String
  }
} as const

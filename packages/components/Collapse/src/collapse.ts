import { ExtractPropTypes } from 'vue'

export type CollapseProps = ExtractPropTypes<typeof collapseProps>
export const collapseProps = {
  accordion: {
    type: Boolean
  }
} as const

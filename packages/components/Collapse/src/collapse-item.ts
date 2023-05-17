import { ExtractPropTypes } from 'vue'

export type CollapseItemProps = ExtractPropTypes<typeof collapseItemProps>
export const collapseItemProps = {
  title: {
    type: String,
    default: 'Title'
  },
  icon: {
    type: String
  }
} as const

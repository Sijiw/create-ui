import { ExtractPropTypes } from 'vue'

export type LinkProps = ExtractPropTypes<typeof linkProps>
export const linkProps = {
  type: {
    type: String
  },
  href: {
    type: String
  },
  target: {
    type: String,
    values: ['_self', '_blank', '_parent', '_top']
  },
  disabled: {
    type: Boolean
  }
} as const

import { ExtractPropTypes, PropType } from 'vue'

export type ImageProps = ExtractPropTypes<typeof imageProps>
export const imageProps = {
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String
  },
  width: {
    type: [String, Number] as PropType<string | number>
  },
  height: {
    type: [String, Number] as PropType<string | number>
  },
  fit: {
    type: String,
    values: ['fill', 'contain', 'cover', 'none', 'scale-down'],
    default: 'cover'
  }
} as const

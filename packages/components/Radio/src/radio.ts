import { ExtractPropTypes, PropType } from 'vue'

export type GroupProps = {
  label: string
  value: any
}
export type RadioProps = ExtractPropTypes<typeof radioProps>
export const radioProps = {
  group: {
    // use Array instead of [] to avoid warning
    type: Array as PropType<GroupProps[]>,
    required: true
  },
  modelValue: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>
  },
  disabled: {
    type: Boolean
  },
  name: {
    type: String,
    required: true
  }
} as const

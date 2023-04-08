import { ExtractPropTypes } from 'vue'

export const switchProps = {
  modelValue: {
    type: Boolean,
    required: true
  }
}

export type SwitchProps = ExtractPropTypes<typeof switchProps>

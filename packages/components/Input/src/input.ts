import { ExtractPropTypes, PropType } from 'vue'

export type InputProps = ExtractPropTypes<typeof inputProps>
export const inputProps = {
  inputType: {
    type: String,
    values: ['text', 'textarea', 'password'],
    default: 'text'
  },
  modelValue: {
    // type: [String, Number] as PropType<string | number>,
    type: String,
    required: true
  },
  maxWidth: {
    type: [String, Number] as PropType<string | number>
  },
  minWidth: {
    type: [String, Number] as PropType<string | number>
  },
  size: {
    type: String,
    values: ['small', 'default', 'large']
  },
  placeholder: {
    type: String
  },
  clearable: {
    type: Boolean
  },
  prefixIcon: {
    type: String
  },
  suffixIcon: {
    type: String
  },
  disabled: {
    type: Boolean
  }
}

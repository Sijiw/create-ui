import { ExtractPropTypes } from 'vue'

export const checkboxProps = {
  modelValue: {
    type: String
  },
  value: {
    type: String,
    default: 'on'
  },
  label: {
    type: String
  },
  checkArr: {
    type: Array
  },
  name: {
    type: String
  }
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>

import { PropType } from 'vue'
import { ExtractPropTypes } from 'vue'

type GroupProps = {
  label: string
  value: string
}

export const checkboxGroupProps = {
  modelValue: {
    type: Array as PropType<string[]>
  },
  group: {
    type: Array as PropType<GroupProps[]>,
    required: true
  },
  name: {
    type: String
  }
}

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>

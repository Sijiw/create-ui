/* eslint-disable @typescript-eslint/no-explicit-any */
import { ExtractPropTypes, PropType } from 'vue'
import type { Rules } from 'async-validator'

export type FormRules = Rules

export type FormProps = ExtractPropTypes<typeof formProps>
export const formProps = {
  model: {
    type: Object as PropType<Record<string, any>>,
    required: true
  },
  rules: {
    type: Object as PropType<FormRules>,
    required: true
  }
} as const

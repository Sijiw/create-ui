/* eslint-disable @typescript-eslint/no-explicit-any */
import { ExtractPropTypes, InjectionKey, PropType } from 'vue'
import type { Rules, ValidateFieldsError } from 'async-validator'

export type FormRules = Rules

export type FormProps = ExtractPropTypes<typeof formProps>
export const formProps = {
  model: {
    type: Array as PropType<Record<string, any>[]>,
    required: true
  },
  rules: {
    type: Object as PropType<FormRules>
  }
} as const

export type FormState = {
  errors: ValidateFieldsError | []
}

export type FormInjectionKey = FormProps & {
  formState: FormState
}
export const formInjectionKey: InjectionKey<FormInjectionKey> =
  Symbol('formInjectionKey')

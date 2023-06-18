import type {
  FormProps,
  FormItemProps,
  FormItemInstance
} from 'packages/components/Form'
import type { Rules } from 'async-validator/dist-types/interface'
import type { ValidateFieldsError } from 'async-validator/dist-types/interface'
import { ComputedRef, InjectionKey } from 'vue'

export type FormRules = Rules

export type FormContext = FormProps & {
  formState: FormState
  changeError: (props: string, error: ValidateFieldsError) => void
  validate: () =>
    | Promise<{
        message: string
      }>
    | undefined
  validateField: (field: string) =>
    | Promise<{
        message: string
      }>
    | undefined
}

export type FormItemContext = FormItemProps & {
  formItemRules: FormRules
  // formItemRef: FormItemInstance
  validate: () =>
    | Promise<{
        message: string
      }>
    | undefined
  isError: boolean
}

export type FormState = {
  errors: Record<string, ValidateFieldsError>
}

export const formInjectionKey: InjectionKey<FormContext> =
  Symbol('formInjectionKey')

export const formItemInjectionKey: InjectionKey<FormItemContext> = Symbol(
  'formItemInjectionKey'
)

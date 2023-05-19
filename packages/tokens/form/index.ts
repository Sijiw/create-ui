import type {
  FormProps,
  FormItemProps,
  FormState
} from '@create-ui/components/Form'
import type { Rules } from 'async-validator/dist-types/interface'
import { InjectionKey } from 'vue'

export type FormRules = Rules & {
  trigger?: 'blur' | 'change'
}

export type FormContext = FormProps & {
  formState: FormState
}

export type FormItemContext = FormItemProps

export const formInjectionKey: InjectionKey<FormContext> =
  Symbol('formInjectionKey')

export const formItemInjectionKey: InjectionKey<FormItemContext> = Symbol(
  'formItemInjectionKey'
)

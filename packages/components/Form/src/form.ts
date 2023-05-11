import { ExtractPropTypes } from 'vue'

export type FormProps = ExtractPropTypes<typeof formProps>
export const formProps = {} as const

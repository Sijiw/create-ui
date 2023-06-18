<template>
  <div :class="ns.baseName">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from 'packages/hooks'
import type { FormState } from 'packages/tokens'
import { formInjectionKey } from 'packages/tokens'
import { formProps } from './form'
import { provide, reactive } from 'vue'
import { toRefs } from 'vue'
import AsyncValidator, { ValidateFieldsError } from 'async-validator'
import { watch } from 'vue'

const ns = useNamespace('form')
const props = defineProps(formProps)
const formState: FormState = reactive({
  errors: {}
})
const formValidator = new AsyncValidator(props.rules)

const validate = () => {
  return formValidator
    .validate(props.model)
    .then(() => {
      console.log('success')

      formState.errors = {}
      return {
        message: 'success'
      }
    })
    .catch(({ errors, fields }) => {
      console.log('failed')

      formState.errors = fields
      return Promise.reject({
        message: 'failed',
        errors,
        fields
      })
    })
}

const validateField = (field: string) => {
  const rule = props.rules[field]
  const model = props.model[field]
  if (!rule || !model) return

  const fieldValidator = new AsyncValidator({ [field]: rule })

  return fieldValidator
    .validate({ [field]: model })
    .then(() => {
      formState.errors[field] = {}
      return {
        message: 'success'
      }
    })
    .catch(({ errors, fields }) => {
      formState.errors[field] = fields[field]

      return Promise.reject({
        message: 'failed',
        errors,
        fields
      })
    })
}

const changeError = (prop: string, error: ValidateFieldsError) => {
  formState.errors[prop] = error
}

watch(
  () => formState.errors,
  (newVal) => {
    console.log(newVal)
  }
)

provide(
  formInjectionKey,
  reactive({
    ...toRefs(props),
    formState,
    changeError,
    validate,
    validateField
  })
)

defineExpose({
  validate,
  validateField
})
</script>

<style scoped></style>

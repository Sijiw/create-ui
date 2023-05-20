<template>
  <div :class="ns.baseName">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@create-ui/hooks'
import type { FormState } from '@create-ui/tokens'
import { formInjectionKey } from '@create-ui/tokens'
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
  if (!props.rules || !formValidator) return

  return formValidator
    .validate(props.model)
    .then(() => {
      return {
        message: 'success'
      }
    })
    .catch(({ errors, fields }) => {
      formState.errors = fields
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
    changeError
  })
)

defineExpose({
  validate
})
</script>

<style scoped></style>

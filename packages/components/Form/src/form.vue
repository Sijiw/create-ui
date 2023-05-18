<template>
  <div :class="ns.baseName">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@create-ui/hooks'
import { formProps, formInjectionKey } from './form'
import type { FormState } from './form'
import { provide, reactive } from 'vue'
import { toRefs } from 'vue'
import AsyncValidator, { ValidateFieldsError } from 'async-validator'

const ns = useNamespace('form')
const props = defineProps(formProps)
const formState: FormState = reactive({
  errors: []
})

const validate = () => {
  if (!props.rules) return
  const validator = new AsyncValidator(props.rules)

  validator.validate(props.model, (error, field) => {
    formState.errors = field
  })
}

provide(
  formInjectionKey,
  reactive({
    ...toRefs(props),
    formState
  })
)
</script>

<style scoped></style>

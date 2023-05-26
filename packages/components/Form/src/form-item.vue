<template>
  <div ref="formItemRef" :class="formItemClasses">
    <label for="" :class="ns.addBlock('label')">
      <span :class="ns.addBM('label', 'required')" v-if="required">*</span>
      {{ label }}
    </label>
    <div :class="[ns.addBlock('slot'), ns.getClass('block', true)]">
      <slot />
      <span :class="errorMessageClasses">{{ errorMessage }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@create-ui/hooks'
import { formItemInjectionKey, formInjectionKey } from '@create-ui/tokens'
import { formItemProps } from './form-item'
import { computed, inject, provide, reactive, ref } from 'vue'
import AsyncValidator, {
  RuleItem,
  Rules,
  ValidateError,
  ValidateFieldsError
} from 'async-validator'
import { toRefs } from 'vue'
import { FormItemInstance } from '..'
import { nextTick } from 'vue'

const ns = useNamespace('form-item')
const props = defineProps(formItemProps)
const formItemRef = ref<FormItemInstance>()
const formProvides = inject(formInjectionKey, undefined)
// const errors = formProvides?.formState.errors
const formItemDescriptor = computed(() => {
  if (!props.prop || !formProvides?.rules[props.prop]) return {} as Rules
  return { [props.prop]: formProvides.rules[props.prop] }
})

const formItemValidator = computed(() => {
  if (!formItemDescriptor.value) return new AsyncValidator({})
  return new AsyncValidator(formItemDescriptor.value)
})

const isError = computed(() => {
  return errorMessage.value !== ''
})

const errorMessage = computed(() => {
  const errors = formProvides?.formState.errors

  if (!errors || !props.prop) return ''

  if (props.prop in errors && errors[props.prop].length) {
    const messageItem = errors[props.prop][0] as ValidateError

    return messageItem.message
  }

  return ''
})

const formItemClasses = computed(() => {
  const res = [ns.baseName, ns.getClass(ns.addModifier('error'), isError.value)]

  if (props.labelPosition) {
    res.push(ns.getClass(props.labelPosition, true))
  }

  return res
})

const errorMessageClasses = computed(() => {
  return [
    ns.addElement('error-message'),
    ns.getClass('show-message', isError.value)
  ]
})

const formItemValidate = () => {
  if (
    !props.prop ||
    !formProvides?.rules[props.prop] ||
    Object.is(formItemDescriptor, {})
  )
    return

  console.log(formProvides.model[props.prop], formItemValidator.value)

  return formItemValidator.value
    ?.validate({ [props.prop]: formProvides.model[props.prop] })
    .then(() => {
      if (props.prop) {
        formProvides.changeError(props.prop, {})
      }
      return {
        message: 'success'
      }
    })
    .catch(({ errors, fields }) => {
      console.log(errors)
      if (props.prop) {
        formProvides.changeError(props.prop, errors)
      }
      return Promise.reject({
        message: 'failed',
        errors,
        fields
      })
    })
}

provide(
  formItemInjectionKey,
  reactive({
    ...toRefs(props),
    formItemRules: formItemDescriptor,
    // formItemRef,
    validate: formItemValidate,
    isError: isError
  })
)

defineExpose({
  formItemValidate
})
</script>

<style scoped lang="less">
@import 'packages/styles/form/form-item.less';
</style>

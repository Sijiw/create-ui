<template>
  <div :class="formItemClasses" @validate.capture="handleBlur($event)">
    <label for="" :class="ns.addBlock('label')">
      <span :class="ns.addBM('label', 'required')" v-if="required">*</span>
      {{ label }}
    </label>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@create-ui/hooks'
import { formItemProps, formItemInjectionKey } from './form-item'
import { formInjectionKey } from './form'
import { computed } from 'vue'
import { inject } from 'vue'
import { provide } from 'vue'

const ns = useNamespace('form-item')
const props = defineProps(formItemProps)
const formProvides = inject(formInjectionKey, undefined)
const errors = formProvides?.formState.errors
const formItemDescriptor = formProvides?.rules?.[props.prop]

const isError = computed(() => {
  if (!errors) return false
  if (props.prop in errors) {
    return true
  }
})

const errorMessage = computed(() => {
  if (isError.value === false || !errors) return undefined
  if (props.prop in errors) {
    return errors[props.prop][0].message
  }
})

const formItemClasses = computed(() => {
  const res = [ns.baseName]

  if (props.labelPosition) {
    res.push(ns.getClass(props.labelPosition, true))
  }

  return res
})

const handleBlur = (e: FocusEvent) => {
  console.log('input blur')
}

provide(formItemInjectionKey, formItemDescriptor)
</script>

<style scoped lang="less">
@import 'packages/styles/form/form-item.less';
</style>

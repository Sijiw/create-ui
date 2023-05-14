<template>
  <div :class="formItemClasses">
    <label for="" :class="ns.addBlock('label')">
      <span :class="ns.addBM('label', 'required')" v-if="required">*</span>
      {{ label }}
    </label>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@create-ui/hooks'
import { formItemProps } from './form-item'
import { computed } from 'vue'

const ns = useNamespace('form-item')
const props = defineProps(formItemProps)

const formItemClasses = computed(() => {
  const res = [ns.baseName]

  if (props.labelPosition) {
    res.push(ns.getClass(props.labelPosition, true))
  }

  return res
})
</script>

<style scoped lang="less">
@import 'packages/styles/form/form-item.less';
</style>

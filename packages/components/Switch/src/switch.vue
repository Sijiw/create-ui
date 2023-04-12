<template>
  <div :class="classes" class="c-switch--large" @click="handleClick">
    <span v-if="$slots.prefix" :class="prefixClasses">
      <slot name="prefix"></slot>
    </span>
    <div :class="containerClasses">
      <div :class="innerClasses"></div>
    </div>
    <span v-if="$slots.suffix" :class="suffixClasses">
      <slot name="suffix"> </slot>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@create-ui/hooks'
import { computed, ref } from 'vue'
import { switchProps } from './switch'

const props = defineProps(switchProps)
const emits = defineEmits(['click', 'update:modelValue'])
const ns = useNamespace('switch')

const switchState = ref(false)

const classes = computed(() => {
  const res = [ns.baseName]

  return res
})
const containerClasses = computed(() => {
  const res = [ns.addBlock('container')]

  if (switchState.value) {
    res.push(ns.addModifier('on'))
  }

  return res
})
const innerClasses = [ns.addElement('inner')]
const prefixClasses = [ns.addBlock('prefix')]
const suffixClasses = [ns.addBlock('suffix')]

const handleClick = () => {
  switchState.value = !switchState.value
  emits('update:modelValue', switchState.value)
  emits('click')
}
</script>

<style scoped lang="less">
@import 'packages/styles/switch/switch.less';
</style>

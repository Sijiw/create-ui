<template>
  <div :class="classes">
    <div :class="prefixClasses">
      <c-icon :icon="prefixIcon" v-if="prefixIcon && !$slots.prefixIcon" />
      <slot name="prefixIcon" />
    </div>
    <input
      :class="inputClasses"
      :placeholder="placeholder"
      :value="modelValue"
      :type="inputType"
      :disabled="disabled"
      ref="input"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <div
      :class="clearableClasses"
      v-show="clearable && clearVisible"
      @click="handleClear"
    >
      <c-icon icon="ic:round-clear" clickable></c-icon>
    </div>
    <div :class="suffixClasses">
      <c-icon :icon="suffixIcon" v-if="suffixIcon && !$slots.suffixIcon" />
      <slot name="suffixIcon" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@create-ui/hooks'
import { computed, ref, watch } from 'vue'
import { inputProps } from './input'

const ns = useNamespace('input')
const props = defineProps(inputProps)
const emits = defineEmits(['update:modelValue', 'clear'])

const clearVisible = computed(
  () => props.modelValue !== undefined && props.modelValue.length !== 0
)
const isFocus = ref(false)
const classes = computed(() => {
  const res = [ns.baseName, ns.getClass('disabled', props.disabled)]
  if (isFocus.value) res.push(ns.getClass('focus', isFocus.value))

  return res
})
const inputClasses = [ns.addBlock('inner')]
const clearableClasses = [ns.addBlock('clearable')]
const prefixClasses = [ns.addBlock('prefix')]
const suffixClasses = [ns.addBlock('suffix')]

const handleFocus = () => {
  isFocus.value = true
}

const handleBlur = () => {
  isFocus.value = false
}

const handleClear = () => {
  emits('update:modelValue', '')
}

const handleInput = (e: Event) => {
  emits('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<style scoped lang="less">
@import 'packages/styles/input/input.less';
</style>

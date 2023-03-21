<template>
  <div :class="classes">
    <div class="y-input-prefix">
      <y-icon :icon="prefixIcon" v-if="prefixIcon && !$slots.prefixIcon" />
      <slot name="prefixIcon" />
    </div>
    <input
      :class="inputClasses"
      :placeholder="placeholder"
      :value="modelValue"
      ref="input"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <div class="y-input-clearable" v-if="clearable" @click="handleClear">
      <y-icon icon="ic:round-clear" clickable></y-icon>
    </div>
    <div class="y-input-suffix">
      <y-icon :icon="suffixIcon" v-if="suffixIcon && !$slots.suffixIcon" />
      <slot name="suffixIcon" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from 'packages/hooks/use-namespace'
import { computed, ref, watch } from 'vue'
import { inputProps } from './input'

const ns = useNamespace('input')
const props = defineProps(inputProps)
const emits = defineEmits(['update:modelValue', 'clear'])

const isFocus = ref(false)
const classes = computed(() => {
  const res = [ns.baseName]
  if (isFocus.value) res.push(ns.getClass('focus', isFocus.value))

  return res
})
const inputClasses = [ns.addBlock('inner')]

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

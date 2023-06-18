<template>
  <div :class="inputClasses">
    <div :class="prefixClasses">
      <c-icon :icon="prefixIcon" v-if="prefixIcon && !$slots.prefixIcon" />
      <slot name="prefixIcon" />
    </div>
    <input
      :class="inputInnerClasses"
      :placeholder="placeholder"
      :value="modelValue"
      :type="inputType"
      :disabled="disabled"
      ref="input"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
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
import { useNamespace } from 'packages/hooks'
import { computed, inject, ref, watch } from 'vue'
import { inputProps } from './input'
import { formItemInjectionKey, formInjectionKey } from 'packages/tokens'
import { nextTick } from 'vue'

const ns = useNamespace('input')
const props = defineProps(inputProps)
const emits = defineEmits(['update:modelValue', 'clear', 'blur', 'change'])
const formItemProvide = inject(formItemInjectionKey, undefined)
const formProvide = inject(formInjectionKey, undefined)
const trigger = formItemProvide?.trigger

const inputError = ref(false)
const isError = computed(() => {
  let res = false
  if (formItemProvide?.isError) res = true

  return res
})

const clearVisible = computed(
  () => props.modelValue !== undefined && props.modelValue.length !== 0
)
const isFocus = ref(false)
const inputClasses = computed(() => {
  const res = [
    ns.baseName,
    ns.getClass('disabled', props.disabled),
    ns.getClass(ns.addModifier('error'), isError.value)
  ]
  if (isFocus.value) res.push(ns.getClass('focus', isFocus.value))

  return res
})
const inputInnerClasses = [ns.addBlock('inner')]
const clearableClasses = [ns.addBlock('clearable')]
const prefixClasses = [ns.addBlock('prefix')]
const suffixClasses = [ns.addBlock('suffix')]

const inputValidate = () => {
  if (!formItemProvide?.prop) return
  const { prop } = formItemProvide

  formProvide
    ?.validateField(prop)
    ?.then(() => {
      inputError.value = false
    })
    .catch(() => {
      inputError.value = true
    })
}

const handleFocus = () => {
  isFocus.value = true
}

const handleBlur = (e: FocusEvent) => {
  isFocus.value = false
  emits('blur', e)

  if (!trigger) return

  if (trigger.includes('blur')) {
    inputValidate()
  }
}

const handleClear = () => {
  emits('update:modelValue', '')
}

const handleInput = (e: Event) => {
  emits('update:modelValue', (e.target as HTMLInputElement).value)

  if (!trigger) return

  if (trigger.includes('input')) {
    inputValidate()
  }
}

const handleChange = () => {
  emits('change')

  if (!trigger) return

  if (trigger.includes('change')) {
    inputValidate()
  }
}
</script>

<style scoped lang="less">
@import 'packages/styles/input/input.less';
</style>

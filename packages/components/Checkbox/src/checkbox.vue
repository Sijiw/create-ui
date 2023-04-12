<template>
  <label :for="`${name}-${label}`" :class="ns.baseName">
    <span :class="ns.addBlock('input')">
      <input
        type="checkbox"
        :name="name"
        :id="`${name}-${label}`"
        :class="ns.addElement('originInput')"
        @input="handleInput"
        :value="modelValue !== undefined ? modelValue : value"
      />
      <span
        :class="[ns.addElement('inner'), ns.getClass('checked', checkState)]"
        ><c-icon icon="ic:baseline-check" v-show="checkState"></c-icon
      ></span>
    </span>
    <span :class="ns.addBlock('label')">{{ label }}</span>
  </label>
</template>

<script lang="ts" setup>
import { useNamespace } from '@create-ui/hooks'
import { checkboxProps } from './checkbox'
import { ref, reactive } from 'vue'

const ns = useNamespace('checkbox')
const props = defineProps(checkboxProps)
const emits = defineEmits(['update:modelValue', 'notifyFather'])
const checkState = ref(false)

const handleInput = (e: Event) => {
  checkState.value = !checkState.value

  emits('notifyFather', [checkState.value, props.value])
  emits('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<style scoped lang="less">
@import 'packages/styles/checkbox/checkbox.less';
</style>

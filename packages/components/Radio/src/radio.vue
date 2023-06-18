<template>
  <div :class="groupClasses">
    <label
      :class="[ns.baseName, ns.getClass('checked', currentValue == item.value)]"
      v-for="(item, index) in group"
      :key="index"
    >
      <span :class="inputClasses">
        <input
          :class="[ns.addElement('originInput')]"
          type="radio"
          :name="name"
          :value="item.value"
          @input="handleInput"
        />
        <span :class="innerClasses"></span>
      </span>
      <span :class="labelClasses">
        {{ item.label }}
      </span>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from 'packages/hooks'
import { ref } from 'vue'
import { radioProps } from './radio'

const props = defineProps(radioProps)
const ns = useNamespace('radio')
const emits = defineEmits(['update:modelValue'])

const groupClasses = [ns.addBlock('group')]
const inputClasses = [ns.addElement('input')]
const innerClasses = [ns.addElement('inner')]
const labelClasses = [ns.addElement('label')]

const currentValue = ref(props.group[0].value)

const handleInput = (event: Event) => {
  const selectedValue = (event.target as HTMLInputElement).value
  currentValue.value = selectedValue

  emits('update:modelValue', selectedValue)
}
</script>

<style scoped lang="less">
@import 'packages/styles/radio/radio.less';
</style>

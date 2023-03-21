<template>
  <div class="y-radio-group">
    <label
      :class="[ns.baseName, ns.getClass('checked', currentValue == item.value)]"
      v-for="(item, index) in group"
      :key="index"
    >
      <span class="y-radio__input">
        <input
          :class="[ns.addElement('originInput')]"
          type="radio"
          :name="name"
          :value="item.value"
          @input="handleInput"
        />
        <span class="y-radio__inner"></span>
      </span>
      <span class="y-radio__label">
        {{ item.label }}
      </span>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from 'packages/hooks/use-namespace'
import { ref } from 'vue'
import { radioProps } from './radio'

const props = defineProps(radioProps)
const ns = useNamespace('radio')
const emits = defineEmits(['update:modelValue'])

const currentValue = ref(props.group[0].value)

// const handleChange = (event: Event) => {
//   console.log('change...', (event.target as HTMLInputElement).value)
// }

const handleInput = (event: Event) => {
  const selectedValue = (event.target as HTMLInputElement).value
  currentValue.value = selectedValue

  emits('update:modelValue', selectedValue)
}
</script>

<style scoped lang="less">
@import 'packages/styles/radio/radio.less';
</style>

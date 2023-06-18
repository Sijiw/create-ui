<template>
  <div :class="ns.baseName">
    <c-checkbox
      @notify-father="handleNotify"
      v-for="item in group"
      :value="item.value"
      :label="item.label"
      :name="name"
    ></c-checkbox>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from 'packages/hooks'
import { checkboxGroupProps } from './checkbox-group'
import { reactive } from 'vue'
import CCheckbox from 'packages/components/Checkbox/src/checkbox.vue'

const ns = useNamespace('checkbox-group')
const props = defineProps(checkboxGroupProps)
const emits = defineEmits(['update:modelValue'])

const value: any[] = reactive([])

const handleNotify = (data: any[]) => {
  const [checkState, itemValue] = data
  console.log(checkState, itemValue)

  if (checkState) {
    value.push(itemValue)
  } else {
    value.splice(value.indexOf(itemValue), 1)
  }
  emits('update:modelValue', value.sort())
}
</script>

<style scoped></style>

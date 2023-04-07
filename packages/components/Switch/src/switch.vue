<template>
  <div class="c-switch c-switch--large" @click="handleClick">
    <span>left</span>
    <div class="c-switch-container">
      <div class="c-switch__inner"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { switchProps } from './switch'
import { useNamespace } from 'packages/hooks/use-namespace'

const props = defineProps(switchProps)
const emits = defineEmits(['click'])
const ns = useNamespace('switch')

const handleClick = () => {
  console.log('click')
  emits('click')
}
</script>

<style scoped lang="less">
@import 'packages/styles/switch/switch.less';
</style>

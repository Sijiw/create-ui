<template>
  <div :class="classes" :style="styles">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { rawProps } from './row'
import { useNamespace } from 'packages/hooks/use-namespace'
import { computed } from 'vue'

const props = defineProps(rawProps)
const ns = useNamespace('row')
const classes = [ns.baseName]
const styles = computed(() => {
  return {
    'justify-content': props.justify ? props.justify : ''
  }
})
</script>

<style scoped lang="less">
@import 'packages/styles/grid/row.less';
</style>

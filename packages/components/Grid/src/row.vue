<template>
  <div :class="classes" :style="styles">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { rawProps } from './row'
import { useNamespace } from 'packages/hooks'
import { CSSProperties } from 'vue'
import { computed } from 'vue'

const props = defineProps(rawProps)
const ns = useNamespace('row')
const classes = [ns.baseName]
const styles = computed<CSSProperties>(() => {
  return {
    'justify-content': props.justify ? props.justify : '',
    '--gutter-size': props.gutter ? `${props.gutter}px` : ''
  }
})
</script>

<style scoped lang="less">
@import 'packages/styles/grid/row.less';
</style>

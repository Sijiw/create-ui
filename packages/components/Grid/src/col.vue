<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from 'packages/hooks/use-namespace'
import { computed } from 'vue'
import { colProps } from './col'

const ns = useNamespace('col')
const props = defineProps(colProps)

const classes = computed(() => {
  const res = [ns.baseName]
  if (props.offset) {
    res.push(ns.addModifier(`offset-${props.offset}`))
  }
  if (props.span) {
    res.push(ns.addModifier(`span-${props.span}`))
  }

  return res
})
</script>

<style scoped lang="less">
@import 'packages/styles/grid/col.less';
</style>

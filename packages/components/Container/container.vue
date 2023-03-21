<template>
  <section :class="classes">
    <slot />
  </section>
</template>

<script lang="ts" setup>
import { Component, computed, useSlots, VNode } from 'vue'
import { useNamespace } from 'packages/hooks/use-namespace'

const ns = useNamespace('container')
const slots = useSlots()
const isVertical = computed(() => {
  if (slots && slots.default) {
    const vNodes: VNode[] = slots.default()
    return !vNodes.some((vNode) => {
      const compName = (vNode.type as Component).name
      return compName === 'CAide'
    })
  } else {
    return true
  }
})

const classes: string[] = [
  ns.baseName,
  ns.getClass('isVertical', isVertical.value)
]
</script>

<style scoped lang="less">
@import 'packages/styles/container/container.less';
</style>

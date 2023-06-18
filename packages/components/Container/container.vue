<template>
  <section :class="classes">
    <slot />
  </section>
</template>

<script lang="ts">
export default {
  name: 'CContainer'
}
</script>

<script lang="ts" setup>
import { Component, computed, useSlots, VNode } from 'vue'
import { useNamespace } from 'packages/hooks'

const ns = useNamespace('container')
const slots = useSlots()
const isVertical = computed(() => {
  if (slots && slots.default) {
    const vNodes: VNode[] = slots.default()
    return !vNodes.some((vNode) => {
      const compName = (vNode.type as Component).name
      console.log(compName)

      return compName === 'CAside'
    })
  } else {
    return true
  }
})

const classes = computed(() => {
  return [ns.baseName, ns.getClass('isVertical', isVertical.value)]
})
</script>

<style scoped lang="less">
@import 'packages/styles/container/container.less';
</style>

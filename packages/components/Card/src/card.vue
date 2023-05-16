<template>
  <div :class="cardClasses" :style="bodyStyle">
    <div :class="ns.addBlock('header')" v-if="$slots.header">
      <slot name="header" />
    </div>
    <div :class="ns.addBlock('body')">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@create-ui/hooks'
import { cardProps } from './card'
import { computed } from 'vue'

const ns = useNamespace('card')
const props = defineProps(cardProps)

const cardClasses = computed(() => {
  const res = [ns.baseName]

  const { shadow, clickable } = props
  switch (shadow) {
    case 'never':
      res.push(ns.addModifier('shadow-never'))
      break
    case 'hover':
      res.push(ns.addModifier('shadow-hover'))
  }

  if (clickable === true) {
    res.push(ns.addModifier('clickable'))
  }

  return res
})
</script>

<style scoped lang="less">
@import 'packages/styles/card/card.less';
</style>

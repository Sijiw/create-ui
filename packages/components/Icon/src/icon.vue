<template>
  <i :class="classes" :style="style">
    <Icon :icon="icon" v-if="icon && !$slots.default" />
    <slot v-else />
  </i>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from 'vue'
import { iconProps } from './icon'
import { useNamespace } from 'packages/hooks/use-namespace'

const ns = useNamespace('icon')
const props = defineProps(iconProps)
const classes = [ns.baseName, ns.getClass('clickable', props.clickable)]

const style = computed<CSSProperties>(() => {
  const { color, size, hoverColor } = props
  const res = {} as CSSProperties
  if (color) res.color = color
  if (size) res.fontSize = `${size}px`
  if (hoverColor) res['--hover-color'] = hoverColor

  return res
})
</script>

<style scoped lang="less"></style>

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

<style scoped lang="less">
.y-icon {
  display: inline-flex;
  // justify-content: center;
  // align-items: center;
  position: relative;

  color: inherit;
  font-size: inherit;
  width: 1em;
  height: 1em;
  transition: all 0.25s;

  &.clickable {
    --hover-color: #409eef;

    cursor: pointer;

    &:hover {
      color: var(--hover-color);
    }
  }

  svg {
    width: 1em;
    height: 1em;
  }
}
</style>

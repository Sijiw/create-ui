<template>
  <button :class="classes" @click="$emit('click', $event)" :style="buttonStyle">
    <span :class="[iconClasses]" v-if="icon || $slots.icon">
      <c-icon v-if="icon" :icon="icon" />
      <slot v-else name="icon" />
    </span>
    <span :class="textClasses" v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts" setup>
import {
  useButton,
  buttonProps,
  useButtonStyle,
  useDisabledStyle
} from './button'
import { useNamespace } from '@create-ui/hooks'
import { Icon } from 'packages/components/Icon'

const props = defineProps(buttonProps)
const { type, size, circle, round, disabled } = props

// 获取namespace
const ns = useNamespace('button')
// const { _type, _size } = useButton(props)
// 获取类名
const classes: string[] = [
  // baseName: y-button
  ns.baseName,
  ns.addModifier(type),
  ns.addModifier(size),
  ns.getClass('circle', circle),
  ns.getClass('round', round),
  ns.getClass('disabled', disabled)
]
const buttonStyle = useButtonStyle(props)
const iconClasses = ns.addBlock('icon')
const textClasses = ns.addBlock('text')

defineEmits(['click'])
</script>

<style lang="less">
@import 'packages/styles/button/button.less';
// @import '@create-ui/styles/button/button.less';
</style>

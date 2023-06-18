<template>
  <a :class="aClasses" :href="href" :target="target" @click="handleClick">
    <slot />
  </a>
</template>

<script lang="ts" setup>
import { useNamespace } from 'packages/hooks'
import { linkProps } from './link'
import { computed } from 'vue'

const ns = useNamespace('link')
const props = defineProps(linkProps)
const emits = defineEmits(['click'])

const aClasses = computed(() => {
  const { type, disabled } = props

  const res = [ns.baseName, ns.getClass('disabled', disabled)]

  if (type) {
    res.push(ns.addModifier(type))
  }

  return res
})

const handleClick = (e: Event) => {
  if (props.disabled) {
    e.preventDefault()
  }
  emits('click')
}
</script>

<style scoped lang="less">
@import 'packages/styles/link/link.less';
</style>

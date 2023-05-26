<template>
  <div :class="ns.baseName">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@create-ui/hooks'
import { menuProps } from './menu'

const ns = useNamespace('menu')
const props = defineProps(menuProps)

const level = 1
const padding = 0
</script>

<style scoped lang="less"></style>

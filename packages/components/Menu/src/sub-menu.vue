<template>
  <ul :class="ns.baseName">
    <slot name="title" />
    <slot />
  </ul>
</template>

<script lang="ts" setup>
import { useNamespace } from '@create-ui/hooks'
import { subMenuProps } from './sub-menu'

const ns = useNamespace('sub-menu')
const props = defineProps(subMenuProps)
</script>

<style scoped lang="less"></style>

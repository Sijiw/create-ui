<template>
  <div :class="ns.baseName">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@create-ui/hooks'
import { collapseProps } from './collapse'

const ns = useNamespace('collapse')
const props = defineProps(collapseProps)
</script>

<style scoped lang="less"></style>

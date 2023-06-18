<template>
  <div :class="ns.baseName"></div>
</template>

<script lang="ts" setup>
import { useNamespace } from 'packages/hooks'
import { barProps } from './bar'

const ns = useNamespace('bar')
const props = defineProps(barProps)
</script>

<style scoped lang="less"></style>

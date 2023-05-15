<template>
  <div :class="ns.baseName">
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@create-ui/hooks'
import { cardProps } from './card'

const ns = useNamespace('card')
const props = defineProps(cardProps)
</script>

<style scoped lang="less"> 
</style>
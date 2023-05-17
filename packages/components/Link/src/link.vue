<template>
  <div :class="ns.baseName">
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@create-ui/hooks'
import { linkProps } from './link'

const ns = useNamespace('link')
const props = defineProps(linkProps)
</script>

<style scoped lang="less"> 
</style>
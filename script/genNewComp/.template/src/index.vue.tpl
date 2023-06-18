<template>
  <div :class="ns.baseName">
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@create-ui/hooks'
import { {{compClassName}}Props } from './{{compClassName}}'

const ns = useNamespace('{{compClassName}}')
const props = defineProps({{compClassName}}Props)
</script>

<style scoped lang="less"> 
</style>
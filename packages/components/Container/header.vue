<template>
  <header :class="[ns.baseName]">
    <slot />
  </header>
</template>

<script lang="ts" setup>
import { useNamespace } from '@create-ui/hooks'

defineOptions({
  name: 'YHeader'
})

const ns = useNamespace('header')
</script>

<style scoped lang="less">
@import 'packages/styles/container/header.less';
</style>

<template>
  <header :class="[ns.baseName]">
    <slot />
  </header>
</template>

<script lang="ts" setup>
import { useNamespace } from 'packages/hooks'

// defineOptions({
//   name: 'YHeader'
// })

const ns = useNamespace('header')
</script>

<script lang="ts">
export default {
  name: 'CHeader'
}
</script>

<style scoped lang="less">
@import 'packages/styles/container/header.less';
</style>

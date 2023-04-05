<template>
  <header class="y-header">
    <slot />
  </header>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'YHeader'
})
</script>

<style scoped lang="less">
@import 'packages/styles/container/header.less';
</style>

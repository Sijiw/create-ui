<template>
  <main class="y-main">
    <slot />
  </main>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'YMain'
})
</script>

<style scoped lang="less">
@import 'packages/styles/container/main.less';
</style>

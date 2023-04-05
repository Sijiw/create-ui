<template>
  <aside class="y-aside">
    <slot />
  </aside>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'CAide'
})
</script>

<style scoped lang="less">
@import 'packages/styles/container/aside.less';
</style>

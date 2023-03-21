<template>
  <footer class="y-footer">
    <slot />
  </footer>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'YFooter'
})
</script>

<style scoped lang="less">
@import 'packages/styles/container/footer.less';
</style>

<template>
  <footer :class="[ns.baseName]">
    <slot />
  </footer>
</template>

<script lang="ts" setup>
import { useNamespace } from 'packages/hooks/use-namespace'

defineOptions({
  name: 'CFooter'
})

const ns = useNamespace('footer')
</script>

<style scoped lang="less">
@import 'packages/styles/container/footer.less';
</style>

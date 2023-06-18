<template>
  <footer :class="[ns.baseName]">
    <slot />
  </footer>
</template>

<script lang="ts" setup>
import { useNamespace } from 'packages/hooks'

// defineOptions({
//   name: 'CFooter'
// })

const ns = useNamespace('footer')
</script>

<script lang="ts">
export default {
  name: 'CFooter'
}
</script>

<style scoped lang="less">
@import 'packages/styles/container/footer.less';
</style>

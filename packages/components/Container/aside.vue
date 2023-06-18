<template>
  <aside :class="[ns.baseName]">
    <slot />
  </aside>
</template>

<script lang="ts" setup>
import { useNamespace } from 'packages/hooks'

// defineOptions({
//   name: 'CAide'
// })

const ns = useNamespace('aside')
</script>

<script lang="ts">
export default {
  name: 'CAside'
}
</script>

<style scoped lang="less">
@import 'packages/styles/container/aside.less';
</style>

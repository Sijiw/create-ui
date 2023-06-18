<template>
  <main :class="[ns.baseName]">
    <slot />
  </main>
</template>

<script lang="ts" setup>
import { useNamespace } from 'packages/hooks'

// defineOptions({
//   name: 'CMain'
// })

const ns = useNamespace('main')
</script>

<script lang="ts">
export default {
  name: 'CMain'
}
</script>

<style scoped lang="less">
@import 'packages/styles/container/main.less';
</style>

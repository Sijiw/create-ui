<template>
  <aside :class="[ns.baseName]">
    <slot />
  </aside>
</template>

<script lang="ts" setup>
import { useNamespace } from 'packages/hooks/use-namespace'

defineOptions({
  name: 'CAide'
})

const ns = useNamespace('aside')
</script>

<style scoped lang="less">
@import 'packages/styles/container/aside.less';
</style>

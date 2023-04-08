<template>
  <main :class="[ns.baseName]">
    <slot />
  </main>
</template>

<script lang="ts" setup>
import { useNamespace } from 'packages/hooks/use-namespace'

defineOptions({
  name: 'CMain'
})

const ns = useNamespace('main')
</script>

<style scoped lang="less">
@import 'packages/styles/container/main.less';
</style>

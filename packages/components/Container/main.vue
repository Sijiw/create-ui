<template>
  <main :class="[ns.baseName]">
    <slot />
  </main>
</template>

<script lang="ts" setup>
import { useNamespace } from '@create-ui/hooks'

defineOptions({
  name: 'CMain'
})

const ns = useNamespace('main')
</script>

<style scoped lang="less">
@import 'packages/styles/container/main.less';
</style>

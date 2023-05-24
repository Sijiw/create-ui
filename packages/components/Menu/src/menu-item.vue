<template>
  <li :class="ns.baseName">
    <slot />
  </li>
</template>

<script lang="ts" setup>
import { useNamespace } from '@create-ui/hooks'
import { menuItemProps } from './menu-item'

const ns = useNamespace('menu-item')
const props = defineProps(menuItemProps)
</script>

<style scoped lang="less">
@import 'packages/styles/menu/menu-item.less';
</style>

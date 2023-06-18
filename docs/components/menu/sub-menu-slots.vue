<template>
  <slots-table :data="data"></slots-table>
</template>

<script lang="ts" setup>
import type { Slots } from '../utils/types'

const data: Slots = [
  {
    slots: 'default',
    description: '默认插槽，包裹子菜单或菜单项'
  },
  {
    slots: 'title',
    description: '子菜单标题，可设置文本和图标'
  }
]
</script>

<style scoped></style>

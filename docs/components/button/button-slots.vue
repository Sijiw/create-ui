<template>
  <slots-table :data="data"></slots-table>
</template>

<script lang="ts" setup>
import type { Slots } from '../utils/types'

const data: Slots = [
  {
    slots: 'default',
    description: '默认插槽，自定义内容'
  },
  {
    slots: 'icon',
    description: '自定义图标'
  }
]
</script>

<style scoped></style>

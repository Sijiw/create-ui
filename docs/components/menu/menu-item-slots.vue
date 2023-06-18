<template>
  <slots-table :data="data"></slots-table>
</template>

<script lang="ts" setup>
import type { Slots } from '../utils/types'

const data: Slots = [
  {
    slots: 'default',
    description: '默认插槽，包裹菜单项文本信息'
  }
]
</script>

<style scoped></style>

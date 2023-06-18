<template>
  <slots-table :data="data"></slots-table>
</template>

<script lang="ts" setup>
import type { Slots } from '../utils/types'

const data: Slots = [
  {
    slots: 'default',
    description: '默认插槽，插入折叠面板项'
  }
]
</script>

<style scoped></style>

<template>
  <slots-table :data="data"></slots-table>
</template>

<script lang="ts" setup>
import type { Slots } from '../utils/types'

const data: Slots = [
  {
    slots: 'prefix',
    description: '前缀内容，可使用文本或自定义SVG图标'
  },
  {
    slots: 'suffix',
    description: '后缀内容，可使用文本或自定义SVG图标'
  }
]
</script>

<style scoped></style>

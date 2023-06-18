<template>
  <slots-table :data="data"></slots-table>
</template>

<script lang="ts" setup>
import type { Slots } from '../utils/types'

const data: Slots = [
  {
    slots: 'prefixIcon',
    description: '输入框前缀图标，可使用自定义SVG图标'
  },
  {
    slots: 'suffixIcon',
    description: '输入框后缀图标，可使用自定义SVG图标'
  }
]
</script>

<style scoped></style>

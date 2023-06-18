<template>
  <slots-table :data="data"></slots-table>
</template>

<script lang="ts" setup>
import type { Slots } from '../utils/types'

const data: Slots = [
  {
    slots: 'default',
    description: '默认插槽，用于包裹表单项或其他数据录入型组件'
  }
]
</script>

<style scoped></style>

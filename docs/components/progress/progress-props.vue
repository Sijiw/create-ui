<template>
  <props-table :data="data"></props-table>
</template>

<script lang="ts" setup>
import type { Props } from '../utils/types'

const data: Props = [
  {
    props: 'percentage',
    description: '百分比，必填，范围0-100',
    type: `number`,
    default: '0'
  },
  {
    props: 'bar-height',
    description: '进度条的高度',
    type: 'number',
    default: '10'
  },
  {
    props: 'text-inside',
    description: '文字是否显示在进度条内',
    type: 'boolean',
    default: 'false'
  },
  {
    props: 'status',
    description: '进度条当前状态',
    type: `'success' | 'danger' | 'warning'`,
    default: '————'
  }
]
</script>

<style scoped></style>

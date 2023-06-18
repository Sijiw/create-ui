<template>
  <props-table :data="data"></props-table>
</template>

<script lang="ts" setup>
import type { Props } from '../utils/types'

const data: Props = [
  {
    props: 'data',
    description: '需要渲染的属性',
    type: `Array`,
    default: '————'
  },
  {
    props: 'height',
    description: '表格高度',
    type: `string | number`,
    default: '————'
  },
  {
    props: 'stript',
    description: '表格是否有条纹',
    type: 'boolean',
    default: 'false'
  }
]
</script>

<style scoped></style>

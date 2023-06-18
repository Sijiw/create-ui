<template>
  <props-table :data="data"></props-table>
</template>

<script lang="ts" setup>
import type { Props } from '../utils/types'

const data: Props = [
  {
    props: 'title',
    description: '折叠面板项标题',
    type: `string`,
    default: '————'
  },
  {
    props: 'icon',
    description: '标题后的图标',
    type: `'string'`,
    default: '————'
  },
  {
    props: 'name',
    description: '折叠面板项的唯一标识，用于手风琴效果的展开判断',
    type: 'string',
    default: '————'
  }
]
</script>

<style scoped></style>

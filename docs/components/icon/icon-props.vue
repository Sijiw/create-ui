<template>
  <props-table :data="data"></props-table>
</template>

<script lang="ts" setup>
import type { Props } from '../utils/types'

const data: Props = [
  {
    props: 'color',
    description: '图标的颜色',
    type: `string`,
    default: '————'
  },
  {
    props: 'size',
    description: '图标大小',
    type: `string | number`,
    default: '————'
  },
  {
    props: 'icon',
    description: '展示的图标名字',
    type: 'string',
    default: '————'
  },
  {
    props: 'clickable',
    description: '是否可点击',
    type: 'boolean',
    default: 'false'
  },
  {
    props: 'hover-color',
    description: '鼠标悬停时的颜色',
    type: 'string',
    default: '————'
  }
]
</script>

<style scoped></style>

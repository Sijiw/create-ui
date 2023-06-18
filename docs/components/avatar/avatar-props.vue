<template>
  <props-table :data="data"></props-table>
</template>

<script lang="ts" setup>
import type { Props } from '../utils/types'

const data: Props = [
  {
    props: 'size',
    description: 'Avatar尺寸',
    type: `'large' | 'default' | 'small'`,
    default: 'default'
  },
  {
    props: 'shape',
    description: 'Avatar形状',
    type: `'circle' | 'square'`,
    default: 'circle'
  },
  {
    props: 'placeholder',
    description: '数据为空时提示信息',
    type: 'string',
    default: '————'
  },
  {
    props: 'src',
    description: '图片路径',
    type: 'string',
    default: '————'
  },
  {
    props: 'icon',
    description: '图标路径',
    type: 'string',
    default: '————'
  }
]
</script>

<style scoped></style>

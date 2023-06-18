<template>
  <props-table :data="data"></props-table>
</template>

<script lang="ts" setup>
import type { Props } from '../utils/types'

const data: Props = [
  {
    props: 'src',
    description: '图片的路径',
    type: `string`,
    default: '————'
  },
  {
    props: 'alt',
    description: '原生img标签的alt属性，用于图片加载失败后显示的文本',
    type: `string`,
    default: '————'
  },
  {
    props: 'width',
    description: '图片宽度',
    type: `'string' | 'number'`,
    default: '————'
  },
  {
    props: 'height',
    description: '图片高度',
    type: `'string' | 'number'`,
    default: '————'
  },
  {
    props: 'fit',
    description: '图片缩放方式，用于CSS的object-fit属性',
    type: `'fill' | 'contain' | 'cover' | 'none' | 'scale-down'`,
    default: 'cover'
  }
]
</script>

<style scoped></style>

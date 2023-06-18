<template>
  <props-table :data="data"></props-table>
</template>

<script lang="ts" setup>
import type { Props } from '../utils/types'

const data: Props = [
  {
    props: 'prop',
    description: '表头成员属性名',
    type: `string`,
    default: '————'
  },
  {
    props: 'label',
    description: '表头文本属性',
    type: `string`,
    default: '————'
  },
  {
    props: 'width',
    description: '表头宽度',
    type: 'string | number',
    default: '————'
  }
]
</script>

<style scoped></style>

<template>
  <props-table :data="data"></props-table>
</template>

<script lang="ts" setup>
import type { Props } from '../utils/types'

const data: Props = [
  {
    props: 'gutter',
    description: '列组件的间距',
    type: `number`,
    default: '0'
  },
  {
    props: 'justify',
    description: '对齐的方式，参考flex的justify-content属性',
    type: `'string'`,
    default: 'start'
  }
]
</script>

<style scoped></style>

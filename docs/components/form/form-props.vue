<template>
  <props-table :data="data"></props-table>
</template>

<script lang="ts" setup>
import type { Props } from '../utils/types'

const data: Props = [
  {
    props: 'model',
    description: '校验的数据',
    type: `object`,
    default: '————'
  },
  {
    props: 'rules',
    description: '校验规则',
    type: `Rules 类似对象数组`,
    default: '————'
  }
]
</script>

<style scoped></style>

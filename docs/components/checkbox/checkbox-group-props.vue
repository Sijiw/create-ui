<template>
  <props-table :data="data"></props-table>
</template>

<script lang="ts" setup>
import type { Props } from '../utils/types'

const data: Props = [
  {
    props: 'model-value',
    description: '绑定的数据类型',
    type: `Array`,
    default: '————'
  },
  {
    props: 'group',
    description: '展示的多选框组',
    type: `Array<{
      label: string
      value: string
    }>`,
    default: '————'
  },
  {
    props: 'name',
    description: '多选框组的唯一标识',
    type: 'string',
    default: '————'
  }
]
</script>

<style scoped></style>

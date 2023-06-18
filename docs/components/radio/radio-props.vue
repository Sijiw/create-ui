<template>
  <props-table :data="data"></props-table>
</template>

<script lang="ts" setup>
import type { Props } from '../utils/types'

const data: Props = [
  {
    props: 'group',
    description: '展示单选框项的组',
    type: `Array<{ label: string value: string }>`,
    default: '————'
  },
  {
    props: 'model-value',
    description: '绑定的数据',
    type: `'string' | 'number' | 'boolean'`,
    default: '————'
  },
  {
    props: 'name',
    description: '单选框组唯一标识',
    type: 'string',
    default: '————'
  }
]
</script>

<style scoped></style>

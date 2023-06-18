<template>
  <props-table :data="data"></props-table>
</template>

<script lang="ts" setup>
import type { Props } from '../utils/types'

const data: Props = [
  {
    props: 'label',
    description: '表单项标签文本',
    type: `string`,
    default: '————'
  },
  {
    props: 'prop',
    description: '表单校验的字段，用于单字段校验',
    type: `'string'`,
    default: '————'
  },
  {
    props: 'required',
    description: '是否为必填属性',
    type: 'boolean',
    default: 'false'
  },
  {
    props: 'label-position',
    description: '标签位置',
    type: `'start' | 'end' | 'top'`,
    default: 'start'
  },
  {
    props: 'trigger',
    description: '触发校验的事件',
    type: `Array<'change' | 'input' | 'blur'>`,
    default: '————'
  }
]
</script>

<style scoped></style>

<template>
  <props-table :data="data"></props-table>
</template>

<script lang="ts" setup>
import type { Props } from '../utils/types'

const data: Props = [
  {
    props: 'input-type',
    description: '输入框的类型',
    type: `'text' | 'textarea' | 'password'`,
    default: 'text'
  },
  {
    props: 'model-value',
    description: '绑定的数据',
    type: `'string'`,
    default: '————'
  },
  {
    props: 'placeholder',
    description: '数据为空时提示信息',
    type: 'string',
    default: '————'
  },
  {
    props: 'clearable',
    description: '是否可一键清除输入框内容',
    type: 'boolean',
    default: 'false'
  },
  {
    props: 'prefix-icon',
    description: '前缀图标名',
    type: 'string',
    default: '————'
  },
  {
    props: 'suffix-icon',
    description: '后缀图标名',
    type: 'string',
    default: '————'
  },
  {
    props: 'disabled',
    description: '是否禁用输入框',
    type: 'boolean',
    default: 'false'
  }
]
</script>

<style scoped></style>

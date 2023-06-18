<template>
  <props-table :data="data"></props-table>
</template>

<script lang="ts" setup>
import type { Props } from '../utils/types'

const data: Props = [
  {
    props: 'size',
    description: 'Button尺寸',
    type: `'large' | 'default' | 'small'`,
    default: 'default'
  },
  {
    props: 'type',
    description: 'Button类型',
    type: `'primary' | 'default' | 'success' | 'warning' | 'danger' | 'info'`,
    default: 'default'
  },
  {
    props: 'input-type',
    description: '输入框的类型',
    type: `'text' | 'textarea' | 'password'`,
    default: 'text'
  },
  {
    props: 'round',
    description: '是否为圆角按钮',
    type: `boolean`,
    default: 'false'
  },
  {
    props: 'circle',
    description: '是否为圆形按钮',
    type: 'boolean',
    default: 'false'
  },
  {
    props: 'disabled',
    description: '是否为禁用状态',
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
    props: 'icon',
    description: '图标名称',
    type: 'string',
    default: '————'
  }
]
</script>

<style scoped></style>

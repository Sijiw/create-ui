<template>
  <props-table :data="data"></props-table>
</template>

<script lang="ts" setup>
import type { Props } from '../utils/types'

const data: Props = [
  {
    props: 'type',
    description: '链接颜色类型',
    type: `string`,
    default: 'default'
  },
  {
    props: 'href',
    description: '原生a标签跳转的链接',
    type: `'string'`,
    default: '————'
  },
  {
    props: 'target',
    description: '原生a标签跳转方式',
    type: 'string',
    default: '————'
  },
  {
    props: 'disabled',
    description: '是否禁用链接',
    type: 'boolean',
    default: 'false'
  }
]
</script>

<style scoped></style>

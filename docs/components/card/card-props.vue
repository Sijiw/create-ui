<template>
  <props-table :data="data"></props-table>
</template>

<script lang="ts" setup>
import type { Props } from '../utils/types'

const data: Props = [
  {
    props: 'shadow',
    description: '阴影出现条件',
    type: `'always' | 'hover' | 'never'`,
    default: 'always'
  },
  {
    props: 'body-style',
    description: '自定义样式',
    type: `'CSSProperties'`,
    default: '————'
  },
  {
    props: 'clickable',
    description: '卡片是否可点击',
    type: 'boolean',
    default: 'false'
  }
]
</script>

<style scoped></style>

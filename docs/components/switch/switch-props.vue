<template>
  <props-table :data="data"></props-table>
</template>

<script lang="ts" setup>
import type { Props } from '../utils/types'

const data: Props = [
  {
    props: 'model-value',
    description: '绑定的数据',
    type: `'boolean'`,
    default: 'false'
  }
]
</script>

<style scoped></style>

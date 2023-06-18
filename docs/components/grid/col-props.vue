<template>
  <props-table :data="data"></props-table>
</template>

<script lang="ts" setup>
import type { Props } from '../utils/types'

const data: Props = [
  {
    props: 'span',
    description: '列所占的格数',
    type: `number`,
    default: '24'
  },
  {
    props: 'offset',
    description: '列偏移的格数',
    type: `'number'`,
    default: '0'
  }
]
</script>

<style scoped></style>

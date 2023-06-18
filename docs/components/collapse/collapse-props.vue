<template>
  <props-table :data="data"></props-table>
</template>

<script lang="ts" setup>
import type { Props } from '../utils/types'

const data: Props = [
  {
    props: 'accordion',
    description: '是否为手风琴效果',
    type: `boolean`,
    default: 'false'
  }
]
</script>

<style scoped></style>

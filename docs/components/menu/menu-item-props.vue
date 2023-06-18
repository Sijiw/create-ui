<template>
  <props-table :data="data"></props-table>
</template>

<script lang="ts" setup>
import type { Props } from '../utils/types'

const data: Props = [
  {
    props: 'index',
    description: '菜单项唯一标识',
    type: `string`,
    default: '————'
  }
]
</script>

<style scoped></style>

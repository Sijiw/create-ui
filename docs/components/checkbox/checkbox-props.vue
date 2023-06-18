<template>
  <props-table :data="data"></props-table>
</template>

<script lang="ts" setup>
import type { Props } from '../utils/types'

const data: Props = [
  {
    props: 'model-value',
    description: '单个使用时绑定的数据，用于选中传入value的值',
    type: `string`,
    default: '————'
  },
  {
    props: 'value',
    description: '作为单个使用时绑定的值，用于返回是否选中该值',
    type: `string`,
    default: `'on'`
  },
  {
    props: 'label',
    description: '多选框项文本，只在独立使用时需要传入',
    type: 'string',
    default: '————'
  },
  {
    props: 'name',
    description: '多选框组的唯一标识，由多选框组传入',
    type: 'string',
    default: '————'
  }
]
</script>

<style scoped></style>

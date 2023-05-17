<template>
  <th :class="ns.baseName" :width="width" :height="height">{{ label }}</th>
</template>

<script lang="ts" setup>
import { useNamespace } from '@create-ui/hooks'
import { tableColumnProps } from './table-column'

const ns = useNamespace('table-column')
const props = defineProps(tableColumnProps)
</script>

<style scoped lang="less">
@import 'packages/styles/table/table-column.less';
</style>

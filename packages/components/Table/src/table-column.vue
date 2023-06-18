<template>
  <th :class="ns.baseName" :width="width" :height="height">
    <div>
      {{ label }}
      <!-- <span :class="ns.addBlock('sort')">
        <div>a</div>
        <div>b</div>
      </span> -->
    </div>
  </th>
</template>

<script lang="ts" setup>
import { useNamespace } from 'packages/hooks'
import { tableColumnProps } from './table-column'

const ns = useNamespace('table-column')
const props = defineProps(tableColumnProps)
</script>

<style scoped lang="less">
@import 'packages/styles/table/table-column.less';
</style>

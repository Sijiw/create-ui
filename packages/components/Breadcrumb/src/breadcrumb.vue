<template>
  <div :class="ns.baseName">
    <ul>
      <li v-for="item in list">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from 'packages/hooks'
import { breadcrumbProps } from './breadcrumb'

const ns = useNamespace('breadcrumb')
const props = defineProps(breadcrumbProps)
</script>

<style scoped lang="less">
@import 'packages/styles/breadcrumb/breadcrumb.less';
</style>

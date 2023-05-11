<template>
  <div :class="ns.baseName">
    <label for="">
      {{ label }}
    </label>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@create-ui/hooks'
import { formItemProps } from './form-item'

const ns = useNamespace('form-item')
const props = defineProps(formItemProps)
</script>

<style scoped lang="less">
@import 'packages/styles/form/form-item.less';
</style>

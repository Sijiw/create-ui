<template>
  <div :class="ns.baseName">
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@create-ui/hooks'
import { formProps } from './form'

const ns = useNamespace('form')
const props = defineProps(formProps)
</script>

<style scoped>
</style>
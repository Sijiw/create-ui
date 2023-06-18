<template>
  <c-table :data="data">
    <c-table-column prop="props" label="属性名"></c-table-column>
    <c-table-column prop="description" label="说明"></c-table-column>
    <c-table-column prop="type" label="类型"></c-table-column>
    <c-table-column prop="default" label="默认值"></c-table-column>
  </c-table>
</template>

<script lang="ts" setup>
type PropsType = {
  props: string
  description: string
  type: string
  default: string
}

type Props = { data: PropsType[] }

const props = defineProps<Props>()
</script>

<style scoped></style>

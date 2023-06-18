<template>
  <c-table :data="data">
    <c-table-column prop="props" :label="propColumns.props"></c-table-column>
    <c-table-column
      prop="description"
      :label="propColumns.description"
    ></c-table-column>
    <c-table-column prop="type" :label="propColumns.type"></c-table-column>
    <c-table-column
      prop="default"
      :label="propColumns.default"
    ></c-table-column>
  </c-table>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { propColumns } from '../utils/types'

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

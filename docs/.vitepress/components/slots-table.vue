<template>
  <c-table :data="data">
    <c-table-column prop="slots" label="插槽名"></c-table-column>
    <c-table-column prop="description" label="说明"></c-table-column>
  </c-table>
</template>

<script lang="ts" setup>
type SlotsType = {
  slots: string
  description: string
}

type Slots = SlotsType[]

type Props = {
  data: Slots
}

const props = defineProps<Props>()
</script>

<style scoped></style>

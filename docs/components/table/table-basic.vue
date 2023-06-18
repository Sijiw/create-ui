<template>
  <div>
    <c-table :data="tableData">
      <c-table-column prop="date" label="Date"></c-table-column>
      <c-table-column prop="name" label="Name"></c-table-column>
      <c-table-column prop="address" label="Address"></c-table-column>
    </c-table>
  </div>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
</script>

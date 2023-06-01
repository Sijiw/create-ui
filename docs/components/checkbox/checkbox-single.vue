<template>
  <c-checkbox v-model="data" :label="label"></c-checkbox>
  <div>你选择了:{{ data }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const data = ref('1')
const label = 'Option1'
</script>

<style scoped></style>

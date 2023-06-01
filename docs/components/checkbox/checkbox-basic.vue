<template>
  <c-row>
    <c-checkbox-group
      :group="group"
      v-model="data"
      :name="name"
    ></c-checkbox-group>
  </c-row>
  <div>你选择了:{{ data }}</div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const group = reactive([
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
])

const name = ref('group1')

const data = ref('')
</script>

<style scoped></style>

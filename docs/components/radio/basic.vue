<template>
  <c-radio :group="group" name="myGroup" v-model="value"></c-radio>
  <c-row>你选择的值为:{{ value }}</c-row>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const value = ref(1)

const group = reactive([
  {
    label: 'a',
    value: 1
  },
  {
    label: 'b',
    value: 2
  },
  {
    label: 'c',
    value: 3
  }
])
</script>

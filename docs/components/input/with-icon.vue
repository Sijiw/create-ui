<template>
  <c-row>
    <c-input
      v-model="data"
      clearable
      prefixIcon="ic:baseline-account-circle"
      suffixIcon="ic:outline-search"
    ></c-input>
  </c-row>
  <c-row>
    <c-input v-model="anotherData" clearable>
      <template #prefixIcon>
        <c-icon icon="ic:baseline-account-circle"></c-icon>
      </template>
      <template #suffixIcon>
        <c-icon icon="ic:outline-search" clickable></c-icon>
      </template>
    </c-input>
  </c-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const data = ref('')
const anotherData = ref('')
</script>

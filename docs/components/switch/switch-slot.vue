<template>
  <c-row>
    <c-switch v-model="data">
      <template #prefix>prefix</template>
      <template #suffix>suffix</template>
    </c-switch>
  </c-row>
  <c-row>
    <c-switch v-model="data">
      <template #prefix>
        <c-icon icon="ic:round-check"></c-icon>
      </template>
      <template #suffix>
        <c-icon icon="ic:round-error"></c-icon>
      </template>
    </c-switch>
  </c-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const data = ref(false)
</script>

<style scoped></style>

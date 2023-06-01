<template>
  <c-switch v-model="data"></c-switch>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const data = ref(false)
</script>

<style scoped></style>

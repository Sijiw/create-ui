<template>
  <c-input v-model="data" clearable></c-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const data = ref('')
</script>

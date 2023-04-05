<template>
  <c-input v-model="data" placeholder="Please Input"></c-input>
  <div>{{ data }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const data = ref('')
</script>

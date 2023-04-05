<template>
  <c-input input-type="password" v-model="data"></c-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const data = ref('')
</script>

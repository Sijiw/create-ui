<template>
  <!-- <c-row :gutter="12"> -->
  <c-row>
    <c-card clickable :style="style">Shadow Always</c-card>
  </c-row>
  <c-row>
    <c-card shadow="hover" clickable :style="style">Shadow Hover</c-card>
  </c-row>
  <c-row>
    <c-card shadow="never" clickable :style="style">Shadow None</c-card>
  </c-row>
  <!-- </c-row> -->
</template>

<script lang="ts" setup>
import { CSSProperties, reactive } from 'vue'

const style = reactive<CSSProperties>({
  width: '400px'
})
</script>

<style scoped></style>

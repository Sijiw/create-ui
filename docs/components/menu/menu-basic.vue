<template>
  <c-menu>
    <c-sub-menu>
      <template #title>
        <c-icon icon="ic:baseline-access-time"></c-icon>
        Sub Menu 1
      </template>
      <c-menu-item index="1-1"> Menu Item 1-1 </c-menu-item>
      <c-menu-item index="1-2"> Menu Item 1-2 </c-menu-item>
      <c-menu-item index="1-3"> Menu Item 1-3 </c-menu-item>
      <c-sub-menu>
        <template #title>
          <c-icon icon="ic:outline-compass-calibration"></c-icon>
          Sub Menu 1-1
        </template>
        <c-menu-item index="1-1-1"> Menu Item 1-1-1 </c-menu-item>
      </c-sub-menu>
    </c-sub-menu>
  </c-menu>
</template>

<script lang="ts" setup></script>

<style scoped></style>

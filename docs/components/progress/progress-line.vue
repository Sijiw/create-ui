<template>
  <div>
    <c-progress :percentage="50"></c-progress>
    <c-progress :percentage="100"></c-progress>
    <c-progress :percentage="100" status="success"></c-progress>
    <c-progress :percentage="100" status="danger"></c-progress>
    <c-progress :percentage="100" status="warning"></c-progress>
  </div>
</template>

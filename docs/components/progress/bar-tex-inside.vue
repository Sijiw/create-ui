<template>
  <div>
    <c-progress
      :barHeight="24"
      :percentage="70"
      :text-inside="true"
    ></c-progress>
    <c-progress
      :barHeight="24"
      :percentage="100"
      :text-inside="true"
      status="success"
    ></c-progress>
    <c-progress
      :barHeight="24"
      :percentage="60"
      :text-inside="true"
      status="warning"
    ></c-progress>
    <c-progress
      :barHeight="24"
      :percentage="40"
      :text-inside="true"
      status="danger"
    ></c-progress>
  </div>
</template>

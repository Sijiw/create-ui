<template>
  <div>
    circle
    <c-avatar size="large">User</c-avatar>
    <c-avatar>User</c-avatar>
    <c-avatar size="small">User</c-avatar>
  </div>

  <div>
    square
    <c-avatar size="large" shape="square">User</c-avatar>
    <c-avatar shape="square">User</c-avatar>
    <c-avatar size="small" shape="square">User</c-avatar>
  </div>
</template>

<style lang="less" scoped>
div + div {
  margin-top: 20px;
}
</style>

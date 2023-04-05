<template>
  <div>
    <c-button>Default</c-button>
    <c-button type="primary">Primary</c-button>
    <c-button type="success">Success</c-button>
    <c-button type="info">Info</c-button>
    <c-button type="warning">Warning</c-button>
    <c-button type="danger">Danger</c-button>
  </div>
  <div>
    <c-button round>Default</c-button>
    <c-button type="primary" round>Primary</c-button>
    <c-button type="success" round>Success</c-button>
    <c-button type="info" round>Info</c-button>
    <c-button type="warning" round>Warning</c-button>
    <c-button type="danger" round>Danger</c-button>
  </div>
  <div>
    <c-button circle icon="ant-design:car-filled"></c-button>
    <c-button type="primary" circle icon="ant-design:car-filled"></c-button>
    <c-button type="success" circle icon="ant-design:car-filled"></c-button>
    <c-button type="info" circle icon="ant-design:car-filled"></c-button>
    <c-button type="warning" circle icon="ant-design:car-filled"></c-button>
    <c-button type="danger" circle icon="ant-design:car-filled"></c-button>
  </div>
</template>

<style lang="less" scoped>
div + div {
  margin-top: 12px;
}
</style>

# Container 布局容器

布局容器用于应用的布局。

## 基本用法

内置5个布局组件，你可以使用以下组件来搭配你的布局。

`<c-container></c-container>` 整个布局的容器

`<c-header></c-header>` Header组件，常用于布局的顶部

`<c-aside></c-aside>` Aside组件，常用于布局的侧边

`<c-main></c-main>` Main组件，布局的主要内容区域

`<c-footer></c-footer>` Footer组件，常用于布局的底部

> 当容器里有`Aside`组件，整个容器会变成横向排列的Flex盒子，如果另一边需要垂直分布，则需要再嵌套一层`Container`组件。

下面展示2个常见的应用布局。

<preview path="./demo1.vue" title="?" description="?"></preview>

<preview path="./demo2.vue" title="?" description="?"></preview>

## Container API

### 各组件插槽

<container-slots></container-slots>

<script>
import ContainerSlots from './container-slots.vue'
</script>

<style>
.c-header {
  background-color: var(--c-color-primary-light-3);
}

.c-aside {
  background-color: var(--c-color-primary-light-5);
}

.c-main {
  background-color: var(--c-color-primary-light-7);
}

.c-footer {
  background-color: var(--c-color-primary-light-9);
}
</style>

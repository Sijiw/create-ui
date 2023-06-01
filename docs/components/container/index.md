# Container 布局容器

Create-UI 内置了5个布局组件，你可以使用以下组件来搭配你的布局。

`<c-container></c-container>` 整个布局的容器

`<c-header></c-header>` Header组件，常用于布局的顶部

`<c-aside></c-aside>` Aside组件，常用于布局的侧边

`<c-main></c-main>` Main组件，布局的主要内容区域

`<c-footer></c-footer>` Footer组件，常用于布局的底部

> 当容器里有`Aside`组件，整个容器会变成横向排列的Flex盒子，如果另一边需要垂直分布，则需要再嵌套一层`Container`组件。

<preview path="./demo1.vue" title="?" description="?"></preview>

<style>
.c-header {
  background-color: #70f3ff;
}
</style>

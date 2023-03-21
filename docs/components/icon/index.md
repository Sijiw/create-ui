# Icon 图标

Create UI 并没有提供一套属于自己的图标库，但是通过封装@Iconify/vue的组件，你可以使用icones.js里的全部图标。

关于icones.js的图标内容，请查看[<c-icon icon="mdi:share"/>icones文档](https://icones.js.org/collection/ic)

## 基本使用

你可以引入`<c-icon>`标签，通过`icon`属性来传入你想要使用的图标。

<preview path="./icon-demo01.vue" title="Icon" description="."></preview>

## 设置颜色和大小

你可以通过`color`和`size`属性来设置图标的颜色和大小。

<preview path="./icon-demo02.vue" title="Icon" description="."></preview>

## 可以点击的图标

你可以传入`clickable`属性，设置图标为可点击。之后，你可以传入你的鼠标单击监听器。
除了`clickable`属性，你还可以传入`hover-color`属性，表示鼠标经过图标时所显示的颜色。

注意，`hover-color`属性不能用于已经有颜色的图标。

<preview path="./icon-demo03.vue" title="Icon" description="."></preview>

## 使用svg图标

如果你有自己的svg图标，你可以直接复制svg在图标标签中。

<preview path="./icon-demo04.vue" title="Icon" description="."></preview>

# Radio 单选框

单选框组件

## 基本用法

你需要传入`v-model`来绑定选中的值，以及一个数组`group`作为传入数据的props，数组每一项包含以下内容：

- `label` 选项的文字部分
- `value` 选中时的值

你还需要传入一个`name`属性，以便能够通过点击文字来选中选项。

<preview path="./basic.vue" title="." description="."></preview>

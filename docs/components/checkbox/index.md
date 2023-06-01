# Checkbox 多选框

多选框组件用于给用户选择多项数据。

## 基本用法

需要为checkbox-group组件绑定3个props：

- model-value：即v-model的数据，类型为数组。
- group： 渲染的数组，内部对象属性由label和value的字符串类型数据组成，表示显示的文本标签和实际值。
- name：本组Checkbox的唯一标识。

也可以直接使用checkbox组件，需要绑定model-value和label。

<preview path="./checkbox-basic.vue" title="." description="."></preview>

## Checkbox API

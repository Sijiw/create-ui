<script setup>
import FormProps from './form-props.vue'
import FormItemProps from './form-item-props.vue'
import FormSlots from './form-slots.vue'
</script>

# Form 表单

表单组件用于数据提交和数据校验。

## 基本用法与表单校验

使用`form-item`组件包裹其他输入录入型组件。

在`form-item`中传入的`prop`属性要与和其他数据录入型组件绑定的属性名一致。

在`form`组件中需要传入`model`属性作为校验数据，以及`rules`作为校验规则，校验规则的类型使用参考[async-validator](https://github.com/yiminghe/async-validator)

<preview path="./form-validate.vue" title="." description="."></preview>

## Form API

### Form 属性

<form-props></form-props>

### Form Item 属性

<form-item-props></form-item-props>

### 各组件插槽

<form-slots></form-slots>

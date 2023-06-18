<script setup>
import LinkProps from './link-props.vue'
import LinkSlots from './link-slots.vue'
</script>

# Link 链接

## 基本用法

使用`type`props设置链接的状态颜色，内置`href`和`target`属性为HTML中a标签的原生属性。

<preview path="./link-basic.vue" title="." description="."></preview>

## 禁用状态

使用`disabled`属性可以将链接设置为禁用状态

<preview path="./link-disabled.vue" title="." description="."></preview>

## Link API

### Link 属性

<link-props></link-props>

### Link 插槽

<link-slots></link-slots>

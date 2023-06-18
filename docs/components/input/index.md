<script setup>
import InputProps from './input-props.vue'
import InputSlots from './input-slots.vue'
</script>

# Input 输入框

输入框组件。

## 基本用法

你需要传入一个响应式数组，并且在标签中使用`v-model`进行双向绑定。

你可以传入`placeholder`属性来设置输入框在未输入时的提示信息。

<preview path="./basic.vue" title="." description="."></preview>

## 密码输入框

传入`inputType`属性值为`password`时，将会变为密码输入框，此时密码内容不可见。

<preview path="./password.vue" title="." description="."></preview>

## 可清除的输入框

使用`clearable`属性设置输入框可以一键清除输入框内容

<preview path="./clearable.vue" title="." description="."></preview>

## 前缀和后缀图标

使用`prefixIcon`和`suffixIcon`属性来设置输入框前缀和后缀的图标。

当然也可以使用插槽来传入图标，并且为该图标添加点击事件。

后缀图标不会与清除内容的图标冲突。

<preview path="./with-icon.vue" title="." description="."></preview>

## 禁用输入框

你可以传入`disabled`属性来禁用输入框

<preview path="./disabled.vue" title="." description="."></preview>

## Input API

### Input 属性

<input-props></input-props>

### Input 插槽

<input-slots></input-slots>

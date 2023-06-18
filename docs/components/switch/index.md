<script setup>
import SwitchProps from './switch-props.vue'
import SwitchSlots from './switch-slots.vue'
</script>

# Switch 开关

开关用于对布尔值数据进行选择输入。

## 基本用法

传入一个bool类型的响应式数据，使用v-model进行绑定。

<preview path="./switch-basic.vue" title="." description="."></preview>

## 前缀和后缀插槽

使用prefix和suffix插槽，设置前缀和后缀内容，可以设置文字、图标等。

<preview path="./switch-slot.vue" title="." description="."></preview>

## Switch API

### Switch 属性

<switch-props></switch-props>

### Switch 插槽

<switch-slots></switch-slots>

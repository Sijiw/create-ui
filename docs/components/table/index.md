# Table 表格

表格组件用于展示一系列对象类型的数据。

## 基本用法

使用`table-column`组件设置表头，`prop`属性设置每个对象的成员属性名，`label`属性表示表头的文本信息。使用`width`属性可以设置该表头的宽度。

在`table`组件中，需要传入`data`属性，即需要渲染的数据，渲染的数据对象成员属性名要与表头的一致，否无正确渲染。使用`height`属性可限制表格的高度。

<preview path="./table-basic.vue" title="." description="."></preview>

## Table API

### Table 属性

<table-props></table-props>

### Table Column 属性

<table-column-props></table-column-props>

### Table 插槽

<table-slots></table-slots>

<script lang="ts">
import TableProps from './table-props.vue'
import TableColumnProps from './table-column-props.vue'
import TableSlots from './table-slots.vue'
</script>

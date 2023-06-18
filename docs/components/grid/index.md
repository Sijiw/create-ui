<script setup>
import RowProps from './row-props.vue'
import ColProps from './col-props.vue'
import GridSlots from './grid-slots.vue'
</script>

# Grid 栅格

栅格组件分为行和列，一行分为24格格子。

## 基本用法

`row`组件使用`gutter`属性设置列组件之间的间距，使用`justify`属性设置组件对齐属性。

`col`组件使用`span`属性设置一列所占格数，使用`offset`设置初始所在格子位置。

## Grid API

### Row 属性

<row-props></row-props>

### Col 属性

<col-props></col-props>

### 各组件插槽

<grid-slots></grid-slots>

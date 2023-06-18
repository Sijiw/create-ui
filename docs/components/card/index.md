<script setup>
import CardProps from './card-props.vue'
import CardSlots from './card-slots.vue'
</script>

# Card 卡片

卡片用于包裹任意形式的信息。

## 基本用法

卡片组件包括标题，内容两部分，使用`title`插槽设置标题的信息，`title`插槽的元素以横向`flex`布局的`space-between`的水平对齐方式排列，内容部分使用默认插槽包裹。

<preview path="./card-basic.vue" title="." description="."></preview>

## 样式属性

使用`shadow`props可以设置阴影显示的时机，使用`clickable`props设置是否为可点击的卡片。

如果想要对插槽使用样式定制，可以在`script`标签中编写`CSSProperties`类型的对象，传入`body-style`props。

<preview path="./card-interact.vue" title="." description="."></preview>

## Card API

### Card 属性

<card-props></card-props>

### Card 插槽

<card-slots></card-slots>

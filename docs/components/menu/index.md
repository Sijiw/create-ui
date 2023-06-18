<script setup>
import MenuItemProps from './menu-item-props.vue'
import MenuSlots from './menu-slots.vue'
import SubMenuSlots from './sub-menu-slots.vue'
import MenuItemSlots from './menu-item-slots.vue'
</script>

# Menu 菜单

菜单组件用于展示可跳转的内容，竖向展示。

## 基本用法

`menu-item`组件可被`menu`或`sub-menu`组件包裹。在`sub-menu`中，可使用`title`插槽。

在`menu-item`组件中，应传入`index`属性来判断当前点击的菜单项。

在渲染菜单时，应按照树形结构，深度优先遍历渲染菜单项。

<preview path="./menu-basic.vue" title="." description="."></preview>

## Menu API

### Menu Item属性

<menu-item-props></menu-item-props>

### Menu 插槽

<menu-slots></menu-slots>

### SubMenu 插槽

<sub-menu-slots></sub-menu-slots>

### MenuItem 插槽

<menu-item-slots></menu-item-slots>

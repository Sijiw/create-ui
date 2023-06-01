# Collapse 折叠面板

折叠面板用于展示标题-内容类型的信息，内容通常为大段文本，希望用于展示和隐藏。

## 基本用法

使用`collapse-item`包裹折叠面板项，内容部分在默认插槽中设置。

使用`title`props设置标题文本，`icon`props设置标题标题文本后缀图标。

<preview path="./collapse-basic.vue" title="." description="."></preview>

## 手风琴效果

在`collapse`组件中，使用`accordion`props设置手风琴效果，只有一个折叠面板项会展开。

<preview path="./collapse-accordion.vue" title="." description="."></preview>

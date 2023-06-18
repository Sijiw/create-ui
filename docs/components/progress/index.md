<script setup>
import ProgressProps from './progress-props.vue'
</script>

# Progress 进度条

用于展示操作进度，告知用户当前状态和预期。

## 直线进度条

Progress需要一个必填的属性， `percentage` ，该属性表示这个进度条的百分比，并且值必须在0~100范围内。

另外，你可以传入一个名为 `status` 的字符串属性（不需要冒号绑定），来表示这个进度条的状态。

<preview path="./progress-line.vue" title="Progress" description="?"></preview>

## 设置进度条高度并且让百分比显示在进度条内

你可以传入一个 `number` 属性 `barHeight` 来控制进度条的高度，并且可以通过 `text-inside` 属性来控制进度条是否在内，该属性的值为 `Boolean` 类型。

<preview path="./bar-tex-inside.vue" title="Progress" description="?"></preview>

## Progress API

### Progress属性

<progress-props></progress-props>

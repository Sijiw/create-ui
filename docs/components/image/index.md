<script setup>
import ImageProps from './image-props.vue'
</script>

# Image 图片

图片组件对img标签进行封装，用于展示图片。

## 基本用法

使用`src`属性设置图片路径，本地和服务器均可。可以直接通过`height`和`width`属性设置图片宽高。

使用`fit`属性设置图片的CSS缩放属性。

<preview path="./image-basic.vue" title="." description="."></preview>

## Image API

### Image 属性

<image-props></image-props>

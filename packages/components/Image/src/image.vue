<template>
  <div :class="ns.baseName">
    <img
      :class="ns.addElement('inner')"
      :style="imageInnerStyle"
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@create-ui/hooks'
import { imageProps } from './image'
import { computed } from 'vue'

const ns = useNamespace('image')
const props = defineProps(imageProps)

const imageInnerStyle = computed(() => {
  const res: Record<string, string> = {}

  if (props.fit) {
    res['object-fit'] = props.fit
  }

  return res
})
</script>

<style scoped lang="less">
@import 'packages/styles/image/image.less';
</style>

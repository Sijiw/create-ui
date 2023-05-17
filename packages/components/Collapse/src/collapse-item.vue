<template>
  <div :class="ns.baseName">
    <div :class="ns.addBlock('header')" @click="handleClick">
      <div>
        <span :class="ns.addBE('header', 'title')">{{ title }}</span>
        <span :class="ns.addBE('header', 'icon')" v-if="icon">
          <Icon :icon="icon"></Icon>
        </span>
      </div>
      <div :class="ns.addBE('header', 'arrow')">
        <Icon icon="ic:round-keyboard-arrow-right"></Icon>
      </div>
    </div>
    <Transition :name="ns.addBlock('transition')">
      <div :class="ns.addBlock('content')" v-show="visible">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@create-ui/hooks'
import { collapseItemProps } from './collapse-item'
import { ref } from 'vue'

const ns = useNamespace('collapse-item')
const props = defineProps(collapseItemProps)

const visible = ref(false)

const handleClick = () => {
  // visible.value = !visible.value
  if (visible.value) {
    visible.value = false
  } else {
    visible.value = true
  }
}
</script>

<style scoped lang="less">
@import 'packages/styles/collapse/collapse-item.less';

.c-collapse-item-transition-enter-active,
.c-collapse-item-transition-leave-active {
  transition: all 0.5s;
}

.c-collapse-item-transition-enter-from,
.c-collapse-item-transition-leave-to {
  max-height: 0;
  overflow: hidden;
}

.c-collapse-item-transition-enter-to,
.c-collapse-item-transition-leave-from {
  max-height: 500px;
  overflow: hidden;
}
</style>

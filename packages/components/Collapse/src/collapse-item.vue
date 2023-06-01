<template>
  <div
    :class="[
      ns.baseName,
      ns.getClass(ns.addModifier('show-content'), shouldOpen)
    ]"
  >
    <div :class="ns.addBlock('header')" @click="handleClick">
      <div :class="ns.addBE('header', 'left')">
        <span :class="ns.addBE('header', 'title')">{{ title }}</span>
        <span :class="ns.addBE('header', 'icon')" v-if="icon">
          <Icon :icon="icon"></Icon>
        </span>
      </div>
      <div :class="ns.addBE('header', 'arrow')">
        <c-icon>
          <Icon icon="ic:round-keyboard-arrow-right"></Icon>
        </c-icon>
      </div>
    </div>
    <div :class="[ns.addBlock('content')]">
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@create-ui/hooks'
import { collapseItemProps } from './collapse-item'
import { computed, ref } from 'vue'
import CIcon from '@create-ui/components/Icon/src/icon.vue'
import { inject } from 'vue'
import { collapseInjectionKey } from 'packages/tokens'
import { nextTick } from 'vue'

const ns = useNamespace('collapse-item')
const props = defineProps(collapseItemProps)
const collapseProvide = inject(collapseInjectionKey, undefined)

const visible = ref(false)
const shouldOpen = computed(() => {
  if (props.name && collapseProvide?.activeKey) {
    // return props.name === collapseProvide.activeKey && visible.value
    if (visible.value) {
      // return props.name === collapseProvide.activeKey
      if (props.name !== collapseProvide.activeKey) {
        visible.value = false
        return false
      } else {
        return true
      }
    } else {
      return false
    }
  } else {
    return visible.value
  }
})

const handleClick = () => {
  if (collapseProvide?.accordion && props.name) {
    collapseProvide.changeActiveKey(props.name)
  }
  visible.value = !visible.value
}
</script>

<style scoped lang="less">
@import 'packages/styles/collapse/collapse-item.less';
</style>

<template>
  <li
    :class="[
      ns.baseName,
      ns.getClass('hidden', !isShow),
      ns.getClass('active', isActive)
    ]"
    @click="handleClick"
  >
    <span :class="[ns.addElement('padding')]" :style="paddingStyle"></span>
    <slot />
  </li>
</template>

<script lang="ts" setup>
import { useNamespace } from 'packages/hooks'
import { menuItemProps } from './menu-item'
import { computed, inject, ref } from 'vue'
import { menuInjectionKey, subMenuInjectionKey } from 'packages/tokens/menu'

const ns = useNamespace('menu-item')
const props = defineProps(menuItemProps)
const emits = defineEmits(['click'])

const subMenuProvide = inject(subMenuInjectionKey, undefined)
const menuProvide = inject(menuInjectionKey, undefined)

const isSelected = ref(false)

const level = computed(() => {
  if (!subMenuProvide) return 1

  return subMenuProvide.level
})

const padding = computed(() => {
  if (!subMenuProvide) return 0

  return subMenuProvide.padding
})

const isShow = computed(() => {
  if (!subMenuProvide) return false

  return subMenuProvide.open
})

const isActive = computed(() => {
  if (!menuProvide) return isSelected.value
  return menuProvide.activeIndex === props.index
})

const handleClick = () => {
  if (menuProvide) {
    menuProvide.changeActiveIndex(props.index)
  }
  isSelected.value = !isSelected.value
}

const paddingStyle = computed(() => {
  return {
    'margin-right': `${padding.value}px`
  }
})
</script>

<style scoped lang="less">
@import 'packages/styles/menu/menu-item.less';
</style>

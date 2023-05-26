<template>
  <div :class="[ns.baseName]">
    <div
      :class="[ns.addBlock('title'), ns.getClass('open', open)]"
      @click="handleClick"
    >
      <span :class="ns.addElement('padding')" :style="paddingStyle"></span>
      <div :class="ns.addElement('text')">
        <slot name="title" />
      </div>
      <div :class="ns.addElement('arrow')">
        <c-icon>
          <Icon icon="ic:round-keyboard-arrow-right"></Icon>
        </c-icon>
      </div>
    </div>
    <div :class="[ns.addBlock('items'), ns.getClass('open', open)]">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@create-ui/hooks'
import { subMenuProps } from './sub-menu'
import { subMenuInjectionKey } from 'packages/tokens/menu'
import { reactive, provide, computed, ref } from 'vue'
import { toRefs } from 'vue'
import { inject } from 'vue'

const ns = useNamespace('sub-menu')
const props = defineProps(subMenuProps)
const emits = defineEmits(['click'])

const primaryLevel = 1
const primaryPadding = 0
const subMenuProvide = inject(subMenuInjectionKey, undefined)
const open = ref(false)
const level = computed(() => {
  if (!subMenuProvide) return primaryLevel

  return subMenuProvide.level + 1
})
const padding = computed(() => {
  if (!subMenuProvide) return primaryPadding

  return subMenuProvide.padding + 8
})

const paddingStyle = computed(() => {
  return {
    'margin-right': `${padding.value}px`
  }
})

const handleClick = () => {
  open.value = !open.value
  emits('click')
}

provide(
  subMenuInjectionKey,
  reactive({
    ...toRefs(props),
    level,
    padding,
    open
  })
)
</script>

<style scoped lang="less">
@import 'packages/styles/menu/sub-menu.less';
</style>

<template>
  <div :class="ns.baseName">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from 'packages/hooks'
import { menuProps } from './menu'
import { ref } from 'vue'
import { menuInjectionKey } from 'packages/tokens/menu'
import { provide } from 'vue'
import { reactive } from 'vue'
import { toRefs } from 'vue'

const ns = useNamespace('menu')
const props = defineProps(menuProps)

const activeIndex = ref('')

const changeActiveIndex = (index: string) => {
  activeIndex.value = index
}

provide(
  menuInjectionKey,
  reactive({
    ...toRefs(props),
    activeIndex,
    changeActiveIndex
  })
)
</script>

<style scoped lang="less">
@import 'packages/styles/menu/menu.less';
</style>

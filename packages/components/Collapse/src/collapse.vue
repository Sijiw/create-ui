<template>
  <div :class="ns.baseName">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@create-ui/hooks'
import { collapseProps } from './collapse'
import { collapseInjectionKey } from 'packages/tokens'
import { provide, ref, toRefs } from 'vue'
import { reactive } from 'vue'

const ns = useNamespace('collapse')
const props = defineProps(collapseProps)

const activeKey = ref<string>('')

const changeActiveKey = (key: string) => {
  activeKey.value = key
}

provide(
  collapseInjectionKey,
  reactive({
    ...toRefs(props),
    activeKey,
    changeActiveKey
  })
)
</script>

<style scoped lang="less"></style>

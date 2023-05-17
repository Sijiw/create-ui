<template>
  <div :class="ns.baseName" :style="containerStyle">
    <table :class="ns.addBlock('container')">
      <thead :class="ns.addBlock('head')">
        <tr>
          <slot />
        </tr>
      </thead>
      <tbody :class="ns.addBlock('body')">
        <tr
          v-for="(dataItem, dataIndex) in data"
          :class="ns.getClass(ns.addModifier('stripe'), dataIndex % 2 === 1)"
        >
          <td v-for="prop in columnProps">
            {{ dataItem[prop] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@create-ui/hooks'
import { tableProps } from './table'
import type { TableColumnProps } from './table-column'
import { computed, useSlots } from 'vue'
import { VNode } from 'vue'
import { VNodeProps } from 'vue'
import { CSSProperties } from 'vue'

const ns = useNamespace('table')
const props = defineProps(tableProps)

const slots = useSlots()

const columnProps = computed(() => {
  const columns = slots && slots.default ? slots.default() : []

  const res: string[] = []

  columns.forEach((item) => {
    const itemProps = item.props as TableColumnProps
    res.push(itemProps.prop)
  })
  return res
})

const containerStyle = computed(() => {
  const res: CSSProperties = {}

  const { height } = props
  if (height) {
    if (typeof height === 'number') {
      res.height = `${height}px`
    } else {
      res.height = height
    }
  }

  return res
})
</script>

<style scoped lang="less">
@import 'packages/styles/table/table.less';
</style>

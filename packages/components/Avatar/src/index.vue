<template>
  <div :class="classes">
    <img v-if="src" :src="src" />
    <slot v-else></slot>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from 'packages/hooks'
import { computed } from 'vue'
import { avatarProps, useAvatarClasses } from './avatar'

const props = defineProps(avatarProps)
console.log(props)

const ns = useNamespace('avatar')
const classes = useAvatarClasses(props)
</script>

<style scoped lang="less">
@import 'packages/styles/avatar/avatar.less';
</style>

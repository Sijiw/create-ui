import Button from '@create-ui/components/Button/src/index.vue'
declare module 'vue' {
  export interface GlobalComponents {
    CAvatar: typeof import('@create-ui/components')['Avatar']
    CButton: typeof Button
  }
}

export {}

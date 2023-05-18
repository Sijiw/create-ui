import { ExtractPropTypes, PropType } from 'vue'

export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>
export const breadcrumbProps = {
  list: {
    type: Array as PropType<string[]>
  }
} as const

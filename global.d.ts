declare module 'vue' {
  export interface GlobalComponents {
    CAvatar: typeof import('@create-ui/components')['Avatar']
    CAside: typeof import('@create-ui/components')['Aside']
    CButton: typeof import('@create-ui/components')['Button']
    CCheckbox: typeof import('@create-ui/components')['Checkbox']
    CCheckboxGroup: typeof import('@create-ui/components')['CheckboxGroup']
    CCol: typeof import('@create-ui/components')['Col']
    CContainer: typeof import('@create-ui/components')['Container']
    CFooter: typeof import('@create-ui/components')['Footer']
    CHeader: typeof import('@create-ui/components')['Header']
    CMain: typeof import('@create-ui/components')['Main']
    CIcon: typeof import('@create-ui/components')['Icon']
    CInput: typeof import('@create-ui/components')['Input']
    CProgress: typeof import('@create-ui/components')['Progress']
    CRadio: typeof import('@create-ui/components')['Radio']
    CRow: typeof import('@create-ui/components')['Row']
    CSwitch: typeof import('@create-ui/components')['Switch']
  }
}

export {}

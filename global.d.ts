declare module 'vue' {
  export interface GlobalComponents {
    CAvatar: typeof import('./packages/components')['Avatar']
    CAside: typeof import('./packages/components')['Aside']
    CButton: typeof import('./packages/components')['Button']
    CCard: typeof import('./packages/components')['Card']
    CCheckbox: typeof import('./packages/components')['Checkbox']
    CCheckboxGroup: typeof import('./packages/components')['CheckboxGroup']
    CCol: typeof import('./packages/components')['Col']
    CCollapse: typeof import('./packages/components')['Collapse']
    CCollapseItem: typeof import('./packages/components')['CollapseItem']
    CContainer: typeof import('./packages/components')['Container']
    CFooter: typeof import('./packages/components')['Footer']
    CForm: typeof import('./packages/components')['Form']
    CFormItem: typeof import('./packages/components')['FormItem']
    CHeader: typeof import('./packages/components')['Header']
    CMain: typeof import('./packages/components')['Main']
    CIcon: typeof import('./packages/components')['Icon']
    CImage: typeof import('./packages/components')['Image']
    CInput: typeof import('./packages/components')['Input']
    CLink: typeof import('./packages/components')['Link']
    CMenu: typeof import('./packages/components')['Menu']
    CMenuItem: typeof import('./packages/components')['MenuItem']
    CProgress: typeof import('./packages/components')['Progress']
    CRadio: typeof import('./packages/components')['Radio']
    CRow: typeof import('./packages/components')['Row']
    CSwitch: typeof import('./packages/components')['Switch']
    CSubMenu: typeof import('./packages/components')['SubMenu']
    CTable: typeof import('./packages/components')['Table']
    CTableColumn: typeof import('./packages/components')['TableColumn']
  }
}

export {}

export interface IsSelectOpen {
    isOpen: boolean
    onBlur?: any
    disabled?: boolean
}

export interface IOption {
    label: string
    value: string
}
export interface ISelectProps {
    options: IOption[]
    onChange: (item: IOption) => void
    section?: { title: string; filterFunc: any; active: boolean }[]
}

export interface IFormikSelect {
    id?: string
    options?: IOption[] | 'shipper' | 'brand' | 'pack'
    label: string
    name: string
    value?: string
    setFieldValue: (field: string, value: any, click?: boolean) => void
    disabled?: boolean
    emptyField?: boolean
    defaultValueFirst?: boolean
    customFields?: {
        [key: string]: { func: any; funcProps: any }
    }
    filterFunc?: (item: IOption) => boolean
    sortFunc?: any
    section?: ISelectProps['section']
    bodyMinHeight?: string
    bodyPadding?: string
    error?: string
    valueLabel?: string
    noInputChange?:boolean
    hideStatus?:string
}

export interface IFormikSelectState extends IFormikSelect {
    withEmptyField?: boolean
}

export interface IFormikSelectZip {
    label: string
    name: string
    value: string
    state: string
    setFieldValue: (field: string, value: any, click?: boolean) => void
    disabled?: boolean
    withEmptyField?: boolean
    setOpenZip?: (status: boolean) => void
}

import { ReactElement } from 'react'

export type TAlign = 'left' | 'right' | 'center'

export interface THead {
    label: string | ReactElement
    propName: string
    width?: number
    align?: TAlign
}

export interface IHead {
    keyTemplate?: string
    header: THead[]
    fullBody?: any[]
    multy?: any[]
    onMultyChnge?: (arr: any[] | any, str?: string) => void
    noMultyAction?: {
        key: string
        regExp?: RegExp
        equal?: string
        noEqual?: string
    }[]
}

export interface IBodyRow extends IHead {
    element: any
    onRowClick?: (id: string) => void
    multy?: any[]
    onMultyChnge?: (arr: any[] | any, str?: string) => void
    link?: (id: string) => string | undefined
    parseHeader?: any[]
}

export interface IBody extends IHead {
    type?: 'without_border'
    fullBody?: any[]
    body: any[] | null
    loading?: boolean
    error?: boolean
    onRowClick?: (id: string) => void
    link?: (id: string) => string | undefined
    multy?: any[]
    onMultyChnge?: (arr: any[] | any, str?: string) => void
    parseHeader?: any[]
    keyTemplate?: string
}

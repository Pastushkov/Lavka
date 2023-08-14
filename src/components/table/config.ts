export interface ITableProps {
    header: IHead[]
    body: any[]
    loading: boolean
    onRowClick?: (id:string) => void
}

export interface IHeaderProps {
    header: IHead[]
}

export interface IHead {
    label: string
    propName: string
    align?: 'center'
    width?: number
}

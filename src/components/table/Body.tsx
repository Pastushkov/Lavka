import React, { FC } from 'react'
import { Loader } from 'components/loader/Loader'
import { IHead, ITableProps } from './config'
import { BodyRow, BodyWrapper, TableRow } from './style'

interface IRowItem {
    element: any
    header: IHead[]
    onRowClick?: (id: string) => void
}

const RowItem: FC<IRowItem> = ({ header, element, onRowClick }) => {
    return (
        <TableRow
            onClick={() => {
                onRowClick?.(element?.id)
            }}
        >
            {header.map(({ propName, align, width }) => (
                <BodyRow
                    align={align}
                    width={width}
                    className={propName === 'image' ? 'image' : ''}
                >
                    {element[propName]}
                </BodyRow>
            ))}
        </TableRow>
    )
}

RowItem.defaultProps = {
    onRowClick: undefined,
}

const Body: FC<ITableProps> = ({ header, body, loading, onRowClick }) => {
    if (loading) return <Loader isLoading={loading}>.</Loader>

    return (
        <BodyWrapper>
            {body.map(element => (
                <RowItem
                    element={element}
                    header={header}
                    onRowClick={onRowClick}
                />
            ))}
        </BodyWrapper>
    )
}

export default Body

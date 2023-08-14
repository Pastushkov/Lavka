import React, { FC } from 'react'
import { ITableProps } from './config'
import Body from './Body'
import Header from './Header'
import { Scroll, TableWrapper } from './style'

const Table: FC<ITableProps> = ({ header, body, loading, onRowClick }) => {
    return (
        <Scroll>
            <TableWrapper>
                <Header header={header} />
                <Body
                    header={header}
                    body={body}
                    loading={loading}
                    onRowClick={onRowClick}
                />
            </TableWrapper>
        </Scroll>
    )
}

export default Table

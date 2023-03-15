import useMediaQuery from '../../hooks/useMediaQuery'
import React, { FC, useEffect, useState } from 'react'
import { Body } from './Body'
import { Header } from './Header'
import { IBody } from './interface'
import SmallTable from './smallTable/Table'
import { Scroll, TableWrapper } from './style'

export const CustomTableLarge: FC<IBody> = ({
    type,
    header,
    onMultyChnge,
    body,
    fullBody,
    noMultyAction,
    ...props
}) => {
    const [multy, setMulty] = useState<any[]>([])

    useEffect(() => {
        setMulty([])
    }, [fullBody])
    
    return (
        <Scroll className={type}>
            <TableWrapper>
                <Header
                    header={header}
                    multy={multy}
                    fullBody={fullBody}
                    onMultyChnge={undefined}
                    noMultyAction={noMultyAction}
                />
                <Body
                    header={header}
                    body={body}
                    multy={multy}
                    onMultyChnge={undefined}
                    noMultyAction={noMultyAction}
                    {...props}
                />
            </TableWrapper>
        </Scroll>
    )
}

const CustomTable: FC<IBody> = props => {
    const breakPoint850 = useMediaQuery('(max-width: 849px')

    return breakPoint850 ? (
        <SmallTable {...props} />
    ) : (
        <CustomTableLarge {...props} />
    )
}

export default CustomTable

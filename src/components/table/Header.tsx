import React, { FC } from 'react'
import { IHeaderProps } from './config'
import { HeaderItem, HeaderWrapper } from './style'

const Header: FC<IHeaderProps> = ({ header }) => {
    return (
        <HeaderWrapper>
            {header.map(({ label, align, width }) => (
                <HeaderItem align={align} width={width}>
                    {label}
                </HeaderItem>
            ))}
        </HeaderWrapper>
    )
}

export default Header

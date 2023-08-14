import React, { FC, ReactElement } from 'react'
import { getCookiesAccessToken } from 'utils/token'
import { SidebarWrapper } from './style'
import Bar from './Components/Bar'

interface IProps {
    children: ReactElement
}

const Sidebar: FC<IProps> = ({ children }) => {
    const token = getCookiesAccessToken()

    if (!token) return children

    return (
        <SidebarWrapper>
            <div className='sidebar'>
                <Bar />
            </div>
            <div className='children'>{children}</div>
        </SidebarWrapper>
    )
}

export default Sidebar

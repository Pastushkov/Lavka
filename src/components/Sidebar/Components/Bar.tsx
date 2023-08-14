import React, { FC } from 'react'
import { BarWrapper } from './style'
import Menu from './Menu'

const Bar: FC = () => {
    return (
        <BarWrapper>
            <div className='menu'>
                <Menu />
            </div>
        </BarWrapper>
    )
}
export default Bar

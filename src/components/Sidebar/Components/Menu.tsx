import React, { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { findActive, sidebarData } from './Menu.data'
import { MenuItem } from './style'

const Menu: FC = () => {
    const { pathname } = useLocation()
    return (
        <div>
            {sidebarData.map(({ label, linkTo }) => {
                const isActive = findActive(pathname, linkTo)
                return (
                    <MenuItem
                        key={label}
                        className={isActive ? 'active_item' : ''}
                    >
                        <Link className='menu_link' to={linkTo}>
                            <div className='menu_link_label'>{label}</div>
                        </Link>
                    </MenuItem>
                )
            })}
        </div>
    )
}
export default Menu

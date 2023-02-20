import React, { FC } from 'react'
import { Head } from './style'
import { Link } from 'react-router-dom'

const Header: FC = () => {
    return (
        <Head>
            <Link to='/shop'>
                Shop
            </Link>
            <Link to='/contacts'>
                Contacts
            </Link>
            <Link to='/about'>
                About
            </Link>
        </Head>
    )
}

export default Header
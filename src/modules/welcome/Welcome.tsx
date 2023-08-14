import { PATH_ALL } from 'config/path'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './style'

const Welcome: FC = () => {
    return (
        <Wrapper>
            <div> Welcome to PROM Operations</div>
            <div className='sing'>
                Already have account ?{' '}
                <Link to={PATH_ALL.sign_in}>Sing in</Link>
            </div>
            <div className='register'>
                Or you can {' '}
                <Link to={PATH_ALL.register}>Register</Link>
            </div>
        </Wrapper>
    )
}
export default Welcome

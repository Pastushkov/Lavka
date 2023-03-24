import React, { FC, ReactElement } from 'react'
import { ClipLoader } from 'react-spinners'
import { colors } from '../style/colors'
import { Wrapper } from './style'

const LoaderWrapper: FC<{
    loading?: boolean
    error?: boolean
    children: ReactElement | any
}> = ({ loading, error, children }) => (
    <Wrapper>
        {loading ? (
            <div className='loading'>
                <ClipLoader size={40} color={colors.purple.purple100} />
            </div>
        ) : error ? (
            <div className='loading'>Error</div>
        ) : (
            children
        )}
    </Wrapper>
)

LoaderWrapper.defaultProps = {
    loading: false,
    error: false,
}

export default LoaderWrapper

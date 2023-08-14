import React, { FC, ReactElement } from 'react'
import { CustomModalBody, CustomModalWrapper } from './style'

export type viewType = 'justtext' | 'long' | 'selfwidth' | ''

export const CustomModal: FC<{
    open: boolean
    viewType?: viewType
    dropCallback?: any
    children: ReactElement | null
}> = ({ open, viewType, children, dropCallback }) => (
    <CustomModalWrapper
        onClick={() => dropCallback?.()}
        className={open ? 'open' : ''}
    >
        <CustomModalBody
            onClick={e => e.stopPropagation()}
            className={open ? 'open' : ''}
            viewType={viewType}
        >
            {children}
        </CustomModalBody>
    </CustomModalWrapper>
)

CustomModal.defaultProps = {
    viewType: '',
    dropCallback: undefined,
}

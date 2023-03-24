import React, { FC, useState } from 'react'
import { EyeClose, EyeOpen } from '../../../assets/images/svgs'
import { ICustomInputPassword } from '../interfaces'
import CustomInput from '..'

export const CustomPasswordInput: FC<ICustomInputPassword> = ({ ...props }) => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <CustomInput
            {...props}
            type={isVisible ? 'text' : 'password'}
            suffix={{
                icon: isVisible ? EyeClose : EyeOpen,
                callback: () => setIsVisible(state => !state),
            }}
        />
    )
}

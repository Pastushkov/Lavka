import React, { FC } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import { colors } from '../../style/colors'
import { ButtonProps } from './interfaces'
import { CustomButton } from './style'

const Button: FC<ButtonProps> = ({
    loading,
    children,
    className,
    ...props
}: ButtonProps) => (
    <CustomButton className={`button_wrapper ${className}`} {...props}>
        {children}
        {loading ? (
            <ClipLoader
                size={15}
                color={
                    props.variant === 'outlined' ? colors.purple : colors.white
                }
                cssOverride={{ marginLeft: '8px' }}
            />
        ) : null}
    </CustomButton>
)

Button.defaultProps = {
    type: 'button',
    variant: 'contained',
    fullWidth: false,
    loading: false,
    disabled: false,
    onClick: undefined,
    isActive: false,
    height: 'auto',
}

export default Button

import React from 'react'

export interface ButtonProps {
    id?: string
    variant?: 'contained' | 'outlined'
    type?: 'submit' | 'button' | 'reset'
    fullWidth?: boolean
    onClick?: (e: any) => void
    loading?: boolean
    children: React.ReactNode
    disabled?: boolean
    isActive?: boolean
    height?: string
    className?: string
}


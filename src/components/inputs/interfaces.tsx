import { ChangeEvent } from 'react'

interface IIcon {
    icon: any
    callback?: () => void
    own?: boolean
}

export interface ICustomInpuBase {
    id?: string
    name: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onBlur?: (e: ChangeEvent<HTMLInputElement>) => void
    onFocus?: (e: ChangeEvent<HTMLInputElement>) => void
    value?: string | number
    disabled?: boolean
    placeholder: string
    errors?: any
    field?: any
    error?: any
}

export interface ICustomInput extends ICustomInpuBase {
    issueHave?: boolean
    disabledShow?: boolean
    activeMode?: boolean
    preffix?: IIcon
    suffix?: IIcon
    type?: 'text' | 'number' | 'email' | 'password'
    autoComplete?: 'off' | 'new-password' | 'on'
    selectMode?: boolean
}

export type ICustomInputPassword = ICustomInpuBase

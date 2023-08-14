import React, { FC, useState } from 'react'
import { useField } from 'formik'
import { ICustomInput } from './interfaces'
import { InputWrapper, IconWrrapper, ErrorLabel, Label } from './style'

export const CustomBaseInput: FC<ICustomInput> = ({
    onChange,
    onBlur,
    onFocus,
    preffix = { icon: undefined, callback: undefined },
    suffix = { icon: undefined, callback: undefined },
    errors,
    field,
    error,
    placeholder,
    ...prop
}) => {
    const [isFocus, setIsFocus] = useState(false)
    const { icon: PreffixIcon, callback: preffixCallback } = preffix
    const { icon: SuffixIcon, callback: suffixCallback } = suffix

    const props = {
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => onChange?.(e),
        onFocus: (e: React.ChangeEvent<HTMLInputElement>) => {
            onFocus?.(e)
            setIsFocus(true)
        },
        onBlur: (e: React.ChangeEvent<HTMLInputElement>) => {
            onBlur?.(e)
            setIsFocus(false)
        },
        className: `input_body ${errors ? 'input_error' : ''} ${
            prop.value ? 'is_value' : ''
        } ${PreffixIcon ? 'input_preffix' : ''} ${
            SuffixIcon ? 'input_suffix' : ''
        }`,
        ...prop,
    }

    return (
        <>
            <InputWrapper className='input_wrapper'>
                <input {...field} {...props} />
                <Label
                    className={`input_label ${
                        isFocus || props.value ? 'is_focus' : ''
                    } ${PreffixIcon ? 'is_preffix' : ''}`}
                >
                    {placeholder}
                </Label>
                {PreffixIcon && (
                    <IconWrrapper onClick={() => preffixCallback?.()}>
                        <PreffixIcon className='input_preffix_icon' />
                    </IconWrrapper>
                )}
                {SuffixIcon && (
                    <IconWrrapper onClick={() => suffixCallback?.()}>
                        <SuffixIcon className='input_suffix_icon' />
                    </IconWrrapper>
                )}
            </InputWrapper>
            {error && (
                <ErrorLabel className='input_error_label'>{error}</ErrorLabel>
            )}
        </>
    )
}

const CustomInput: FC<ICustomInput> = ({ ...prop }) => {
    const [field, meta] = useField(prop)
    const { touched } = meta
    const errors = touched && meta.error

    return (
        <CustomBaseInput
            {...prop}
            field={field}
            errors={errors}
            error={meta.error}
        />
    )
}

export default CustomInput
import React, { FC, useRef, useState } from 'react'
import { useField } from 'formik'
import { ICustomInput } from '../interfaces'
import { ErrorLabel, Label } from '../style'
import { TextAreaWrapper, IconWrrapper } from './style'

export const CustomTextArea: FC<ICustomInput> = ({
    disabledShow,
    onChange,
    onBlur,
    onFocus,
    preffix = { icon: undefined, callback: undefined },
    suffix = { icon: undefined, callback: undefined },
    placeholder,
    issueHave,
    ...prop
}) => {
    const ref = useRef() as any
    const [isFocus, setIsFocus] = useState(false)
    const [field, meta] = useField(prop)
    const { touched } = meta
    const errors = touched && meta.error

    const { icon: PreffixIcon, callback: preffixCallback } = preffix
    const { icon: SuffixIcon, callback: suffixCallback } = suffix

    const props: any = {
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => onChange?.(e),
        onFocus: (e: React.ChangeEvent<HTMLInputElement>) => {
            onFocus?.(e)
            setIsFocus(true)
        },
        className: `textarea_body ${errors ? 'textarea_error' : ''} ${
            prop.value ? 'is_value' : ''
        } ${PreffixIcon ? 'textarea_preffix' : ''} ${
            SuffixIcon ? 'textarea_suffix' : ''
        } ${disabledShow ? 'disabled_show' : ''} ${
            issueHave ? 'issue_have' : ''
        }`,
        ...prop,
    }

    return (
        <TextAreaWrapper
            height={ref?.current?.scrollHeight}
            className='textarea_wrapper'
        >
            <textarea
                ref={ref}
                {...field}
                {...props}
                onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
                    field.onBlur(e)
                    onBlur?.(e)
                    setIsFocus(false)
                }}
            />
            <Label
                className={`aria input_label ${
                    isFocus || props.value ? 'is_focus' : ''
                } ${errors ? 'error' : ''} ${disabledShow ? 'disable' : ''}`}
            >
                {placeholder}
            </Label>
            {PreffixIcon && (
                <IconWrrapper onClick={() => preffixCallback?.()}>
                    <PreffixIcon className='textarea_preffix_icon' />
                </IconWrrapper>
            )}
            {SuffixIcon && (
                <IconWrrapper onClick={() => suffixCallback?.()}>
                    <SuffixIcon className='textarea_suffix_icon' />
                </IconWrrapper>
            )}
            {errors && (
                <ErrorLabel className='textarea_error_label'>
                    {meta.error}
                </ErrorLabel>
            )}
        </TextAreaWrapper>
    )
}

import React, { FC, useState } from 'react'
import { useField } from 'formik'
import { ICustomInput } from './interfaces'
import { InputWrapper, IconWrrapper, ErrorLabel, Label, InputContainer } from './style'

const CustomInput: FC<ICustomInput> = ({
    disabledShow,
    activeMode,
    onChange,
    onBlur,
    onFocus,
    preffix = { icon: undefined, callback: undefined },
    suffix = { icon: undefined, callback: undefined },
    placeholder,
    selectMode,
    ...prop
}) => {
    const [field, meta] = useField(prop)
    const { touched } = meta
    const errors = touched && meta.error

    const [isFocus, setIsFocus] = useState(false)
    const { icon: PreffixIcon, own: preffixOwn, callback: preffixCallback } = preffix
    const { icon: SuffixIcon, own: suffixOwn, callback: suffixCallback } = suffix

    const props = {
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => onChange?.(e),
        onFocus: (e: React.ChangeEvent<HTMLInputElement>) => {
            onFocus?.(e)
            setIsFocus(true)
        },
        className: `input_body ${errors ? 'error' : ''} ${isFocus || prop.value || activeMode ? 'is_value' : ''} ${
            PreffixIcon ? 'input_preffix' : ''
        } ${SuffixIcon ? 'input_suffix' : ''} ${disabledShow ? 'disabled_show' : ''} ${
            selectMode ? 'select_mode' : ''
        }`,
        ...prop,
    }

    return (
        <InputContainer>
            <InputWrapper className='input_wrapper'>
                <input
                    {...field}
                    {...props}
                    onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
                        field.onBlur(e)
                        onBlur?.(e)
                        setIsFocus(false)
                    }}
                    id={`id_input_${props.name}`}
                />
                <Label
                    className={`input_label ${isFocus || prop.value || activeMode ? 'is_focus' : ''} ${
                        errors ? 'error' : ''
                    } ${PreffixIcon ? 'is_preffix' : ''}`}
                >
                    {placeholder}
                </Label>
                {PreffixIcon && !preffixOwn && (
                    <IconWrrapper onClick={() => preffixCallback?.()}>
                        <PreffixIcon className='input_preffix_icon' />
                    </IconWrrapper>
                )}
                {SuffixIcon && !suffixOwn && (
                    <IconWrrapper onClick={() => suffixCallback?.()}>
                        <SuffixIcon id={`id_for_test_${props.name}`} className='input_suffix_icon' />
                    </IconWrrapper>
                )}
                {PreffixIcon && preffixOwn ? PreffixIcon : null}
                {SuffixIcon && suffixOwn ? SuffixIcon : null}
            </InputWrapper>
            {errors && <ErrorLabel className='input_error_label'>{errors}</ErrorLabel>}
        </InputContainer>
    )
}

CustomInput.defaultProps = {
    // eslint-disable-next-line react/default-props-match-prop-types
    autoComplete: 'off',
}

export default CustomInput

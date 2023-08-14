import { colors } from 'style/colors'
import styled from 'styled-components'

export const InputWrapper = styled.div`
    width: 100%;
    position: relative;

    .input_body {
        display: block;
        width: 100%;

        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: ${colors.dark_grey};

        padding: 15px;
        border-radius: 4px;
        border: 1px solid ${colors.grey};

        outline: none;
        color: ${colors.purple};
        border: 1px solid ${colors.purple};

        &::placeholder {
        }
    }
    .input_body.is_value {
        color: ${colors.purple};
        border: 1px solid ${colors.purple};
    }
    .input_body.error {
    }

    .input_preffix {
        padding-left: 35px;
    }
    .input_suffix {
        padding-right: 35px;
    }

    .input_preffix_icon,
    .input_suffix_icon {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        cursor: pointer;
        width: 20px;
        height: auto;
    }

    .input_preffix_icon {
        left: 15px;
    }
    .input_suffix_icon {
        right: 15px;
    }
`

export const IconWrrapper = styled.div`
    .input_preffix_icon,
    .input_suffix_icon {
        fill: transparent;
    }
`

export const ErrorLabel = styled.div`
    margin: 3px 0 0 3px;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
`

export const Label = styled.div`
    pointer-events: none;
    position: absolute;
    left: 15px;
    &.is_preffix {
        left: 35px;
    }
    top: 50%;
    transform: translate(0, -50%);
    transition: all 0.3s;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${colors.dark_grey};

    padding: 0 2px;
    left: 15px;
    top: 0;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    background-color: ${colors.white};
    color: ${colors.purple};
`

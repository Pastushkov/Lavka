import styled, { css } from 'styled-components'

export interface Props {
    variant?: string
    fullWidth?: boolean
    disabled?: boolean | null
    isActive?: boolean
    height?: string
}

export const CustomButton = styled.button<Props>`
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    line-height: 26px;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 500;
    border-radius: 4px;
    letter-spacing: 0.46px;
    display: inline-flex;
    gap: 16px;
    align-items: center;
    padding: 8px 22px;
    justify-content: center;
    box-sizing: border-box;
    height: ${props => props.height || 'auto'};
    &:disabled {
    }
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
    ${({ variant, isActive }) => {
        switch (variant) {
            case 'outlined':
                return css`
                    border: 1px solid #5d32d5;
                    color: #5d32d5;
                    background: transparent;

                    &.red_btn {
                        border: 1px solid #e65100;
                        color: #e65100;
                    }
                `
            default:
                return css`
                    background: ${isActive ? '#e65100' : '#5d32d5'};
                    color: #fff;
                    border: 1px solid #5d32d5;
                    &:disabled {
                        border: 1px solid #7d5bdd;
                        background: #7d5bdd;
                        cursor: no-drop;
                    }
                `
        }
    }}

    &:disabled {
        cursor: no-drop;
    }

    &.small {
        height: 28px;
    }
`

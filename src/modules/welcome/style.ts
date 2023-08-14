import { colors } from 'style/colors'
import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    .sing {
        > a {
            font-size: 20px;
            background-color: ${colors.grey};
            border-radius: 15px;
            padding: 10px;
            text-decoration: none;
            color: ${colors.black};
            border: 1px solid transparent;
            &:hover {
                border: 1px solid ${colors.black};
            }
        }
    }
    .register {
        > a {
            font-size: 20px;
            background-color: ${colors.darl_grey_silver};
            border-radius: 15px;
            padding: 10px;
            text-decoration: none;
            color: ${colors.black};
            border: 1px solid transparent;
            &:hover {
                border: 1px solid ${colors.black};
            }
        }
    }
`

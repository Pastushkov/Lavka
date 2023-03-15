import { colors } from '../../style/colors'
import styled from 'styled-components'
import { TAlign } from './interface'

export const Scroll = styled.div`
    width: 100%;
    box-shadow: 0px 4px 30px #edf0f1;
    border: 1px solid ${colors.grey.grey20};
    overflow: auto;

    ::-webkit-scrollbar-track {
        background-color: ${colors.white};
    }

    ::-webkit-scrollbar {
        height: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${colors.grey.grey30};
    }

    &.without_border {
        box-shadow: none;
        border: none;
    }
`

export const TableWrapper = styled.table`
    width: 100%;

    color: ${colors.black};

    border-spacing: 0;
`

export const HeaderWrapper = styled.thead``

export const BodyWrapper = styled.tbody`
    &.position {
        position: relative;
        height: 50px;
        & > * {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: ${colors.grey.grey30};
        }
    }
`

export const TableRow = styled.tr`
    &.head {
        font-weight: 500;
    }

    &.body {
        font-weight: 400;
        & > *:nth-child(n + 1) {
            border-top: 1px solid ${colors.grey.grey30};
        }
    }
    &.body.pointer {
        cursor: pointer;
        &:hover {
            background-color: rgba(0, 0, 0, 0.04);
        }
    }

    a {
        display: block;
        text-decoration: none;
        width: 100%;
        height: 100%;
        color: ${colors.black};
        padding: 16px;
    }
`

export const TableItem = styled.td<{ width?: number; align?: TAlign }>`
    width: ${({ width }) => (width ? `${width}%` : 'fit-content')};
    /* overflow-wrap: anywhere; */
    text-align: ${({ align }) => align ?? 'left'};
    &.checkbox {
        width: fit-content;
    }

    &.nodata {
        max-width: 100% !important;
        width: 100% !important;
    }
    &.padding {
        padding: 16px;
    }
`

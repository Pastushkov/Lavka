import { colors } from 'style/colors'
import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    display: flex;
    width: 100%;
`

export const HeaderItem = styled.div<{
    align?: 'center'
    width?: number
}>`
    text-align: ${({ align }) => align ?? 'left'};
    width: ${({ width }) => (width ? `${width}px` : `200px`)};
    border: 1px solid ${colors.purple};
    background-color: ${colors.grey_silver};
    flex-grow: 1;
`

export const BodyRow = styled.div<{
    align?: 'center'
    width?: number
}>`
    text-align: ${({ align }) => align ?? 'left'};
    width: ${({ width }) => (width ? `${width}px` : `200px`)};
    flex-grow: 1;
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 5px;
    border-right: 1px dashed ${colors.purple};
    height: 100px;
    font-size: 16px;
    cursor: pointer;

    &.image {
        height: 100px;
        > img {
            display: block;
            width: 100%;
            /* height: auto; */
            max-height: 100%;
            object-fit: contain;
        }
    }
    &:last-child {
        border-right: none;
    }
`

export const BodyWrapper = styled.div``

export const TableRow = styled.div`
    display: flex;
    width: 100%;
    border: 1px solid ${colors.purple};
    &:hover {
        background-color: ${colors.grey};
    }   
`

export const Scroll = styled.div`
    width: 100%;
    box-shadow: 0px 4px 30px #edf0f1;
    border: 1px solid ${colors.grey};
    border-radius: 6px;
    overflow: auto;

    ::-webkit-scrollbar-track {
        background-color: ${colors.white};
    }

    ::-webkit-scrollbar {
        height: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${colors.grey};
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

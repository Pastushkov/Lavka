import styled from 'styled-components'
import { viewType as viewTypes } from './Modal'

export const CustomModalWrapper = styled.div`
    padding: 15px;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    position: fixed;
    background-color: #00000078;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: 0.5s;
    pointer-events: none;
    &.open {
        pointer-events: all;
        opacity: 1;
    }
`

export const CustomModalBody = styled.div<{ viewType?: viewTypes }>`
    width: 100%;
    width: max-content;
    max-height: 90%;
    padding: 20px;
    border-radius: 20px;
    background-color: #fff;
    position: relative;

    transform: scale(0);
    transition: 0.5s;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 30px;
    }

    &::-webkit-scrollbar-track {
        background-color: #fff;
        border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 500px;
        border-left: 13px solid transparent;
        border-right: 13px solid transparent;
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
        background-clip: content-box;
        background-color: #a7a7a7;
    }
`

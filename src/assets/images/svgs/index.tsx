import React from 'react'

export const SelectArrow = ({ ...props }) => (
    <svg
        {...props}
        width='10'
        height='5'
        viewBox='0 0 10 5'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path d='M5 5L0 0H10L5 5Z' fill='#5D32D5' {...props} />
    </svg>
)
import React, { useMemo } from 'react'

interface IProps {
    total: number
    isLoading: boolean
    body: any[]
}

const usePagination = ({ total, body }: IProps) => {
    const pages = useMemo(() => Math.ceil(total / body.length), [total])
    console.log(pages)

    return {
        pagination: <div>pages</div>,
        pages,
    }
}
export default usePagination

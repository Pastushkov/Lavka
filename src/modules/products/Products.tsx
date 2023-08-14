import React, { FC, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/reducers/rootReducer'
import Table from 'components/table/Table'
import { useHistory } from 'react-router-dom'
import { PATH_ALL } from 'config/path'
import usePagination from 'hooks/usePagination'
import { Wrapper } from './style'
import { fetchProductsListAction } from './store/actions'
import { productsHeader } from './config'

const Products: FC = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { list, isLoading, total } = useSelector(
        ({ products }: RootState) => ({
            list: products.list,
            isLoading: products.isLaoding,
            total: products.total,
        }),
    )

    useEffect(() => {
        if (!list) {
            dispatch(fetchProductsListAction({}))
        }
    }, [list])

    const handleRowClick = (id: string) => {
        history.push(`${PATH_ALL.products}/${id}`)
    }

    const parseBody = useMemo(
        () =>
            list?.map(item => ({
                ...item,
                price: `${item.price} ${item.currency}`,
                image: <img src={item.main_image} alt='img' />,
            })) || [],
        [list],
    )

    const { pages, pagination } = usePagination({
        body: parseBody,
        isLoading,
        total,
    })

    return (
        <Wrapper>
            <Table
                body={parseBody}
                header={productsHeader}
                loading={isLoading}
                onRowClick={handleRowClick}
            />
            {pagination}
            {pages}
        </Wrapper>
    )
}
export default Products

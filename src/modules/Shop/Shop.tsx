import React, { FC, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers/rootReducer'
import { FetchShopListAction } from './store/actions'

const Shop: FC = () => {
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    const { list, isLoading } = useSelector(({ shop }: RootState) => ({
        list: shop.list,
        isLoading: shop.isLoadingList
    }))

    useEffect(() => {
        if (page === 1) {
            dispatch(FetchShopListAction({
                last_id: null
            }))
        }
        else {
            dispatch(FetchShopListAction({
                last_id: list ? list[list?.length - 1].id : null
            }))
        }
    }, [page])



    useEffect(() => {
        if (list)
            console.log(list);
    }, [list])

    const products = useMemo(() => {
        return list?.map((item) => {
            return <div>
                <div><img src={item.main_image} /></div>
                <div>Name: {item.name}</div>
                <div>Price: {item.price}</div>
            </div>
        })
    }, [list])

    return (
        <div>
            {isLoading ? <div>LOADING</div> :
                <>
                    <div>
                        {page > 1 && <button onClick={() => {
                            setPage(page - 1)                            
                        }}>prev</button>}
                        {page}
                        <button onClick={() => {
                            setPage(page + 1)
                        }}>next</button>
                    </div>
                    {products}
                </>
            }
        </div>
    )
}

export default Shop
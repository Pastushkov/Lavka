import React, {FC, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers/rootReducer'
import { FetchShopListAction } from './store/actions'

const Shop:FC = ()=>{

    const dispatch = useDispatch()

    const { list, isLoading } = useSelector(({ shop }: RootState) => ({
        list: shop.list,
        isLoading: shop.isLoadingList
    }))    

    useEffect(()=>{
        if (!list)
        dispatch(FetchShopListAction())
    },[])

    useEffect(() => {
        if (list)
        console.log(list);        
    }, [list])

    return (
        <div>321</div>
    )
}

export default Shop
import { lazy } from 'react'
import { PATH_ALL } from '../config/path'

export const ProductsRoutes = [
    {
        id: 1,
        module: 'ProductsRoutes',
        protected: true,
        exact: true,
        path: PATH_ALL.products,
        component: lazy(() => import('modules/products/Products')),
    },
    {
        id: 2,
        module: 'ProductsRoutes',
        protected: true,
        exact: true,
        path: PATH_ALL.product_id,
        component: lazy(() => import('modules/products/info/ProductInfo')),
    },
]

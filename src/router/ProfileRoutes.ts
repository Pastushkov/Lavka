import { lazy } from 'react'
import { PATH_ALL } from '../config/path'

export const ProfileRoutes = [
    {
        id: 1,
        module: 'ProfileRoutes',
        protected: true,
        exact: true,
        path: PATH_ALL.profile,
        component: lazy(() => import('modules/profile/Profile')),
    },
]

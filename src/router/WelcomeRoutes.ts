import { lazy } from 'react'
import { PATH_ALL } from '../config/path'

export const WelcomeRoutes = [
    {
        id: 1,
        module: 'WelcomeRoutes',
        protected: false,
        exact: true,
        path: PATH_ALL.welcome,
        component: lazy(() => import('modules/welcome/Welcome')),
    },
]
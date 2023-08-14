import { AuthRoutes } from './AuthRoutes'
import { ProductsRoutes } from './ProductsRoutes'
import { ProfileRoutes } from './ProfileRoutes'
import { WelcomeRoutes } from './WelcomeRoutes'

export default [
    ...AuthRoutes,
    ...WelcomeRoutes,
    ...ProfileRoutes,
    ...ProductsRoutes,
]

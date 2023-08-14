const path = (root: string, sublink: string) => `${root}${sublink}`
const ROOTS_ROOT = '/'

export const PATH_AUTH = {
    root: ROOTS_ROOT,
    sign_in: path(ROOTS_ROOT, 'sign_in'),
    register: path(ROOTS_ROOT, 'register'),
}

export const PATH_WELCOME = {
    welcome: path(ROOTS_ROOT, 'welcome'),
}

export const PATH_PROFILE = {
    profile: path(ROOTS_ROOT, 'profile'),
}

export const PATH_PRODUCTS = {
    products: path(ROOTS_ROOT, 'products'),
    product_id: path(ROOTS_ROOT, 'products/:id'),
}

export const PATH_ALL = {
    ...PATH_AUTH,
    ...PATH_PROFILE,
    ...PATH_WELCOME,
    ...PATH_PRODUCTS
}

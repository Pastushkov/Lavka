import { PATH_ALL, PATH_PRODUCTS, PATH_PROFILE } from 'config/path'

export const sidebarData: { label: string; linkTo: string }[] = [
    {
        label: 'Products',
        linkTo: PATH_ALL.products,
    },
    {
        label: 'Profile',
        linkTo: PATH_ALL.profile,
    },
]

export const findActive = (activePath: string, linkTo: string) => {
    const keys = {
        [`${PATH_ALL.profile}`]: Object.values(PATH_PROFILE),
        [`${PATH_ALL.products}`]: Object.values(PATH_PRODUCTS),
    }

    const filter = (arr: string) =>
        arr.split('/').filter(it => it && it !== ':id')

    return !!keys[linkTo]?.find(
        path => !!filter(path)?.find(el => filter(activePath).includes(el)),
    )
}

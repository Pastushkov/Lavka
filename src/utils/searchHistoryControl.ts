import { Location } from 'history'

export const changeSearchItem = (name: string, value: string, location: Location) => {
    const { search } = location
    if (search.length === 0) {
        return `?${name}=${value}`
    }
    if (!search.includes(name)) {
        return `${search}&${name}=${value}`
    }
    return search
        .split('&')
        .map(item => (item.includes(name) ? `${item.split('=')[0]}=${value}` : item))
        .join('&')
}

export const getSearchItem = (name: string, location: Location) => {
    const { search } = location
    let res = ''
    search.split('&').forEach(item => {
        if (item.includes(name) && item.split('=')?.[1]) {
            ;[, res] = item.split('=')
        }
    })
    return res
}

export const deleteSeatchItem = (name: string, location: Location) => {
    const { search } = location
    if (search.includes(name)) {
        const unifySearch = search.substring(1)
        const queryList = unifySearch.split('&')
        const filter = queryList.filter(item => !item.includes(name))
        return filter.length > 0 ? `?${filter.join('&')}` : ''
    }
    return search
}

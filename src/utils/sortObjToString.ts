import { Location } from 'history'
import { getSearchItem } from './searchHistoryControl'

export const sortObjToRequestString = (obj: { field: string; up: boolean } | null) => {
    if (!obj?.field) return 'order_desc=created'
    return obj.up ? `order_desc=${obj.field}` : `order_asc=${obj.field}`
}

export const sortStringToObj = (location: Location) => {
    const data = getSearchItem('tableSort', location)
    if (data) {
        const res = data.slice(1, -1).split(',')
        if (res.length > 0) {
            return { field: res[0], up: res?.[1] ? res[1] === 'true' : false }
        }
    }
    return null
}

import { IHead } from 'components/table/config'

export const productsHeader: IHead[] = [
    {
        label: '',
        propName: 'image',
        align: 'center',
        width: 50,
    },
    {
        label: 'Name',
        propName: 'name',
        align: 'center',
    },
    {
        label: 'price',
        propName: 'price',
        align: 'center',
    },
    {
        label: 'status',
        propName: 'status',
        align: 'center',
    },
]

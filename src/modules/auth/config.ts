export interface IInitialValues {
    email: string
    password: string
    name: string
    phone: string
    promToken: string
}

export const initialValues: IInitialValues = {
    email: '',
    password: '',
    name: '',
    phone: '',
    promToken: '',
}

export interface IAuthInitial {
    email: string
    password: string
}

export const AuthInitialvValues: IAuthInitial = {
    email: "",
    password: ""
}
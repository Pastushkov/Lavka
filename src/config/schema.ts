import * as yup from 'yup'
import { errorMessages } from './errors'
import { regex } from './regex'

const validPhone = () =>
    yup
        .string()
        .max(12, errorMessages.matchOrLess(12))
        .min(12, errorMessages.matchOrLonger(12))
        .matches(regex.phoneNumber, errorMessages.phoneNumber)
        .required(errorMessages.required)

export const registerSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
    name: yup.string().required(),
    phone: validPhone(),
    promToken: yup.string().required(),
})

export const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
})

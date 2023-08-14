export const errorMessages = {
    required: 'Field is required',
    phoneNumber: 'Phone number is invalid',
    matchOrLonger: (value: number) => `Must be ${value} characters or longer`,
    matchOrLess: (value: number) => `Must be ${value} characters or less`,
}
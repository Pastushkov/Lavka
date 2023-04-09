import React, { FC } from 'react'
import CustomSelect from 'components/select/Select'
import { Form, Formik } from 'formik'

export const limitsOptions = [
    { label: '10', value: '10' },
    { label: '20', value: '20' },
    { label: '50', value: '50' },
    { label: '100', value: '100' },
]

export const PaginationSelect: FC<{ limit: number; setLimit: (limit: number) => void }> = ({ limit, setLimit }) => (
    <Formik
        enableReinitialize
        initialValues={{ limit }}
        onSubmit={values => {
            setLimit(+values.limit)
        }}
    >
        {props => {
            const { values, setFieldValue, handleSubmit } = props

            return (
                <Form>
                    <CustomSelect
                        label=''
                        name='limit'
                        value={`${values.limit}`}
                        options={limitsOptions}
                        setFieldValue={(name, value) => {
                            setFieldValue(name, value)
                            handleSubmit()
                        }}
                        bodyMinHeight='none'
                        bodyPadding='9px 15px'
                    />
                </Form>
            )
        }}
    </Formik>
)

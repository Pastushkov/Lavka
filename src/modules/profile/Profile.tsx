import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/reducers/rootReducer'
import { Loader } from 'components/loader/Loader'
import { Form, Formik } from 'formik'
import CustomInput from 'components/input/Input'
import { ButtonWrapper, Wrapper } from 'style/general'
import Button from 'components/button'
import { fetchUpdateUserDataAction, fetchUserDataAction } from './store/actions'
import { FormWrapper, Header, Line } from './style'
import { IStartValues, startValues } from './config'

const Profile: FC = () => {
    const dispatch = useDispatch()

    const [initialValues, setInitialValues] =
        useState<IStartValues>(startValues)

    const { userData, isLoading } = useSelector(({ user }: RootState) => ({
        userData: user.user,
        isLoading: user.isLoading,
    }))

    useEffect(() => {
        if (!userData) {
            dispatch(fetchUserDataAction())
        } else {
            setInitialValues({
                email: userData?.email ?? '',
                name: userData?.name ?? '',
                phone: userData?.phone ?? '',
                promToken: userData?.promToken ?? '',
            })
        }
    }, [userData])

    return (
        <Loader isLoading={isLoading}>
            <Wrapper>
                <Header> Profile</Header>

                <Formik
                    enableReinitialize
                    initialValues={initialValues}
                    onSubmit={values => {
                        dispatch(fetchUpdateUserDataAction(values))
                    }}
                >
                    {({ values, handleChange, dirty, isValid }) => {
                        return (
                            <Form>
                                <FormWrapper>
                                    <Line>
                                        <CustomInput
                                            name='email'
                                            value={values.email}
                                            placeholder='email'
                                            onChange={handleChange}
                                        />
                                        <CustomInput
                                            name='phone'
                                            value={values.phone}
                                            placeholder='phone'
                                            onChange={handleChange}
                                        />
                                        <CustomInput
                                            name='name'
                                            value={values.name}
                                            placeholder='name'
                                            onChange={handleChange}
                                        />
                                    </Line>
                                    <Line>
                                        <CustomInput
                                            name='promToken'
                                            value={values.promToken}
                                            placeholder='promToken'
                                            onChange={handleChange}
                                        />
                                    </Line>

                                    <ButtonWrapper>
                                        <Button
                                            type='submit'
                                            disabled={!dirty || !isValid}
                                        >
                                            Update profile info
                                        </Button>
                                    </ButtonWrapper>
                                </FormWrapper>
                            </Form>
                        )
                    }}
                </Formik>
            </Wrapper>
        </Loader>
    )
}

export default Profile

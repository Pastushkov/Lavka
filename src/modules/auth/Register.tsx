import React, { FC, useEffect } from 'react'
import { Form, Formik } from 'formik'
import CustomInput from 'components/input/Input'
import Button from 'components/button'
import { registerSchema } from 'config/schema'
import { useHistory } from 'react-router-dom'
import { PATH_ALL } from 'config/path'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/reducers/rootReducer'
import { ButtonWrapper } from 'style/general'
import { Header, Line, Wrapper } from './style'
import { initialValues } from './config'
import { fetchRegisterAction } from './store/actions'

const Register: FC = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const { registerSuccess } = useSelector(({ authorization }: RootState) => ({
        registerSuccess: authorization.registerSuccess,
    }))

    useEffect(() => {
        if (registerSuccess) {
            history.push(PATH_ALL.sign_in)
        }
    }, [registerSuccess])

    return (
        <Wrapper>
            <Header>Register</Header>
            <Formik
                initialValues={initialValues}
                onSubmit={values => {
                    console.log('SUbmit', values)
                    dispatch(fetchRegisterAction(values))
                }}
                validationSchema={registerSchema}
            >
                {props => {
                    const { values, handleChange } = props

                    return (
                        <Form>
                            <Line>
                                <div>
                                    <CustomInput
                                        name='email'
                                        placeholder='email'
                                        onChange={handleChange}
                                        value={values.email}
                                    />
                                </div>
                                <div>
                                    <CustomInput
                                        name='password'
                                        placeholder='password'
                                        onChange={handleChange}
                                        value={values.password}
                                    />
                                </div>
                            </Line>
                            <Line>
                                <div>
                                    <CustomInput
                                        name='name'
                                        placeholder='name'
                                        onChange={handleChange}
                                        value={values.name}
                                    />
                                </div>
                                <div>
                                    <CustomInput
                                        name='phone'
                                        placeholder='phone'
                                        onChange={handleChange}
                                        value={values.phone}
                                    />
                                </div>
                            </Line>
                            <Line>
                                <div className='one'>
                                    <CustomInput
                                        name='promToken'
                                        placeholder='promToken'
                                        onChange={handleChange}
                                        value={values.promToken}
                                    />
                                </div>
                            </Line>
                            <ButtonWrapper>
                                <Button type='submit'>OK</Button>
                            </ButtonWrapper>
                        </Form>
                    )
                }}
            </Formik>
            <div>
                Already have account?{' '}
                <Button onClick={() => history.push(PATH_ALL.sign_in)}>
                    Sing in
                </Button>
            </div>
        </Wrapper>
    )
}

export default Register

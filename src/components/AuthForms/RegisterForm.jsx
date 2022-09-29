import { Formik } from "formik"

import {  Logo } from 'components';
import { AuthButton, RedirectButton, AuthFormWrapper, AuthFormInput, FieldsList, FormTitle } from "./AuthForm.styled"
import { IconSVG } from "helpers/IconSvg";
export const RegisterForm = ({handleSubmit}) => {

    const initialValues = {
        email:'',
        password:'',
        firstName:''
    }

    const onSubmitForm = (values, actions) => {
        handleSubmit(values);
        actions.resetForm()
    }


    return (
        <Formik initialValues={initialValues} onSubmit={onSubmitForm}>
            
            <AuthFormWrapper className='register-form'>
                <Logo/>
                <FormTitle>Register to get more features</FormTitle>
                <FieldsList>
                    <li>
                        <IconSVG id="form-email-icon"/>
                        <AuthFormInput className="register-form__email" name="email" type="email" placeholder="Email"/>
                    </li>
                    <li>
                        <IconSVG id="form-password-icon"/>
                        <AuthFormInput className="register-form__password" name="password" type="text" placeholder="Password"/>
                    </li>
                    
                    <li>
                        <IconSVG id="form-name-icon"/>
                        <AuthFormInput className="register-form__frist-name" name="firstName" type="text" placeholder="First name (not necessary)"/>
                    </li>
                </FieldsList>
                


                <AuthButton type='submit' className="register-form__register-button">register</AuthButton>
                <RedirectButton to='/login'>login</RedirectButton>

                        
            </AuthFormWrapper>
        </Formik>
    )
}
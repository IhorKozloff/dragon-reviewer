import { Formik, ErrorMessage } from "formik"
import * as yup from 'yup';
import {  Logo } from 'components';
import { AuthButton, RedirectButton, AuthFormWrapper, AuthFormInput, FieldsList, FormTitle } from "./AuthForm.styled";
import { IconSVG } from "helpers/IconSvg";

export const LoginForm = ({handleSubmit}) => {

    const initialValues = {
        email:'',
        password:''
    }

    const onSubmitForm = (values, actions) => {
        handleSubmit(values)
        actions.resetForm()
    }
    const schema = yup.object().shape({
        password: yup.string().min(6).max(16).required(),
        email: yup.string().email().required(),
    });

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmitForm} validationSchema={schema}>
            
            <AuthFormWrapper className='login-form'>
                <Logo/>
                <FormTitle>Please Log In</FormTitle>
                <FieldsList>
                    <li>
                        <IconSVG id="form-email-icon"/>
                        <AuthFormInput className="login-form__email" name="email" type="email" placeholder="Email"/>
                        <ErrorMessage name="email"/>
                    </li>
                    <li>
                        <IconSVG id="form-password-icon"/>
                        <AuthFormInput className="login-form__password" name="password" type="text" placeholder="Password"/>
                        <ErrorMessage name="password"/>
                    </li>
                </FieldsList>
                


                <AuthButton type='submit' className="login-form__login-button">log in</AuthButton>
                <RedirectButton to={"/register"}>register</RedirectButton>

                        
            </AuthFormWrapper>
        </Formik>
    )
}
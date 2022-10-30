import { Formik, ErrorMessage } from "formik"
import * as yup from 'yup';
import {  Logo } from 'components';
import { AuthButton, RedirectButton, AuthFormWrapper, AuthFormInput, FieldsList, FormTitle, ErrorContent } from "./AuthForm.styled";
import { PasswordTooltip } from "./PasswordTooltip/PasswordTooltip";
import { PasswordSecureLableComponent } from "./PasswordSecureLable/PasswordSecureLable";
import { IconSVG } from "helpers/IconSvg";
import { useState } from "react";

export const RegisterForm = ({handleSubmit}) => {

    const [secureComponentData, setSecureComponentData] = useState(null)

    const initialValues = {
        email:'',
        password:'',
        firstName:''
    }

    const onSubmitForm = (values, actions) => {
        handleSubmit(values);
        actions.resetForm()
    }
    const schema = yup.object().shape({
        name: yup.string(),
        password: yup.string().min(6).max(16).required(),
        email: yup.string().email().required(),
    });

    const onPasswordInputChange = (event) => {
        setSecureComponentData(event.target.value)
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmitForm} validationSchema={schema}>
            {({handleChange}) => (
            <AuthFormWrapper className='register-form'>
                <Logo/>
                <FormTitle>Register to get more features</FormTitle>
                <FieldsList>
                    <li>
                        <IconSVG id="form-email-icon"/>
                        <AuthFormInput className="register-form__email" name="email" type="email" placeholder="Email"/>
                        <ErrorMessage name="email">{msg => <ErrorContent>{msg}</ErrorContent>}</ErrorMessage>
                    </li>
                    <li>
                        <IconSVG id="form-password-icon"/>
                        <AuthFormInput className="register-form__password" name="password" type="password" placeholder="Password"  onChange={(e) => {
                                handleChange(e);
                                onPasswordInputChange(e)
                            }}/>
                        <ErrorMessage name="password">{msg => <ErrorContent>{msg}</ErrorContent>}</ErrorMessage>

                        <PasswordTooltip/>
                       { secureComponentData !== null && secureComponentData !== "" && <PasswordSecureLableComponent data={secureComponentData}/>}
                        {/*Воот сюда тултипку*/}
                    </li>
                    
                    <li>
                        <IconSVG id="form-name-icon"/>
                        <AuthFormInput className="register-form__frist-name" name="firstName" type="text" placeholder="First name (not necessary)"/>
                    </li>
                </FieldsList>
                


                <AuthButton type='submit' className="register-form__register-button">register</AuthButton>
                <RedirectButton to='/login'>login</RedirectButton>

                        
            </AuthFormWrapper>
            )}
        </Formik>
    )
}
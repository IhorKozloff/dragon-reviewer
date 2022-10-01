import { Formik, ErrorMessage } from "formik"
import * as yup from 'yup';
import { AuthButton, CancelButton, AuthFormWrapper, AuthFormInput, FieldsList, FormTitle, FormBackDrop } from "./AuthForm.styled";
import { IconSVG } from "helpers/IconSvg";
import { createPortal } from "react-dom";
import { Section, Container } from "GlobalStyles";

export const ConfirmPasswordForm = ({hendleConfirmData, cancelForm}) => {

    const initialValues = {
        email:'',
        password:''
    }

    const onSubmitForm = (values, actions) => {
        hendleConfirmData(values)
        actions.resetForm()
    }
    const schema = yup.object().shape({
        password: yup.string().min(6).max(16).required(),
    });

    const loaderBackdropRoot = document.querySelector('#loader-backdrop-root');

    return createPortal(
        <FormBackDrop>
            <Section>
                <Container>
                <Formik initialValues={initialValues} onSubmit={onSubmitForm} validationSchema={schema}>
                
                <AuthFormWrapper>
                    <FormTitle>Please confirm password</FormTitle>
                    <FieldsList>
                        <li>
                            <IconSVG id="form-password-icon"/>
                            <AuthFormInput className="login-form__password" name="password" type="text" placeholder="Password"/>
                            <ErrorMessage name="password"/>
                        </li>
                    </FieldsList>
                    


                    <AuthButton type='submit' className="login-form__login-button">Confirm</AuthButton>
                    <CancelButton type="button" onClick={cancelForm}>Exit</CancelButton>

                            
                </AuthFormWrapper>
            </Formik>
                </Container>
            </Section>
            
        </FormBackDrop>, loaderBackdropRoot
    )
}
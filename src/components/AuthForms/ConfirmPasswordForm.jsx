import { Formik, ErrorMessage } from "formik"
import * as yup from 'yup';
import { AuthButton, CancelButton, AuthFormWrapper, AuthFormInput, FieldsList, FormTitle, ErrorContent } from "./AuthForm.styled";
import { IconSVG } from "helpers/IconSvg";
import { Section, Container } from "GlobalStyles";
import { ModalWindowBackdrop } from "components";

export const ConfirmPasswordForm = ({hendleConfirmData, closeForm}) => {

    const initialValues = {
        password:''
    }

    const onSubmitForm = (values, actions) => {
        hendleConfirmData(values)
        actions.resetForm()
    }
    const schema = yup.object().shape({
        password: yup.string().min(6).max(16).required(),
    });

  

    return (
        <ModalWindowBackdrop theme='dark'>
            <Section>
                <Container>
                    <Formik initialValues={initialValues} onSubmit={onSubmitForm} validationSchema={schema}>
                
                        <AuthFormWrapper>

                            <FormTitle>Please confirm you current password</FormTitle>

                            <FieldsList>
                                <li>
                                    <IconSVG id="form-password-icon"/>
                                    <AuthFormInput className="login-form__password" name="password" type="text" placeholder="Password"/>
                                    <ErrorMessage name="password">{msg => <ErrorContent>{msg}</ErrorContent>}</ErrorMessage>
                                </li>
                            </FieldsList>
                            
                            <AuthButton type='submit' className="login-form__login-button">Confirm</AuthButton>
                            <CancelButton type="button" onClick={closeForm}>Exit</CancelButton>

                        </AuthFormWrapper>
                    </Formik>
                </Container>
            </Section>
            
        </ModalWindowBackdrop>
    )
}
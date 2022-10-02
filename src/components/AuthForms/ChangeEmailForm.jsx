import { Formik, ErrorMessage } from "formik"
import { AuthButton, AuthFormInput, FieldsList, AuthFormWrapper, FormTitle, CancelButton, ErrorContent} from "./AuthForm.styled";
import { IconSVG } from "helpers/IconSvg";
import * as yup from 'yup';
import { Section, Container } from "GlobalStyles";
import { ModalWindowBackdrop } from "components";

export const ChangeEmailForm = ({hendleChangeEmail, closeForm}) => {

    const initialValues = {
        oldEmail:'',
        newEmail:''
    }

    const onSubmitForm = ({newEmail}, actions) => {
        hendleChangeEmail(newEmail)
        actions.resetForm()
    }

    const schema = yup.object().shape({
        newEmail: yup.string().email().required(),
    });

    return (
        <ModalWindowBackdrop theme='dark'>
            <Section>
                <Container>
                    <Formik initialValues={initialValues} onSubmit={onSubmitForm} validationSchema={schema}>
                        <AuthFormWrapper>
                            <FormTitle>Change you email</FormTitle>
                                <FieldsList>
                                    <li>
                                        <IconSVG id="form-email-icon"/>
                                        <AuthFormInput name="newEmail" type="email" placeholder="new email"/>
                                        <ErrorMessage name="newEmail">{msg => <ErrorContent>{msg}</ErrorContent>}</ErrorMessage>
                                    </li>
                                </FieldsList>
                                
                                <AuthButton type='submit'>Change email</AuthButton>
                                <CancelButton type="button" onClick={closeForm}>Exit</CancelButton>
                            </AuthFormWrapper>
                    </Formik>
                </Container>
            </Section>
        </ModalWindowBackdrop>
    )
}



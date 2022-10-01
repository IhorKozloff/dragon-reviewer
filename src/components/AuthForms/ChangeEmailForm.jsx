import { Formik, ErrorMessage } from "formik"
import { AuthButton, AuthFormInput, FieldsList, AuthFormWrapper, FormTitle, CancelButton, FormBackDrop} from "./AuthForm.styled";
import { IconSVG } from "helpers/IconSvg";
import * as yup from 'yup';
import { createPortal } from "react-dom";
import { Section, Container } from "GlobalStyles";

export const ChangeEmailForm = ({hendleChangeEmail, cancelForm}) => {

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

    const loaderBackdropRoot = document.querySelector('#loader-backdrop-root');

    return createPortal(
        <FormBackDrop>
            <Section>
                <Container>
        <Formik initialValues={initialValues} onSubmit={onSubmitForm} validationSchema={schema}>
            
            <AuthFormWrapper>
            <FormTitle>Change you email</FormTitle>
                <FieldsList>
                    <li>
                        <IconSVG id="form-email-icon"/>
                        <AuthFormInput name="newEmail" type="email" placeholder="new email"/>
                        <ErrorMessage name="newEmail"/>
                    </li>
                </FieldsList>
                
                <AuthButton type='submit'>Change email</AuthButton>
                <CancelButton type="button" onClick={cancelForm}>Exit</CancelButton>
            </AuthFormWrapper>
        </Formik>
        </Container>
            </Section>
            
        </FormBackDrop>, loaderBackdropRoot
    )
}



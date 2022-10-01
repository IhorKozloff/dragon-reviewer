import { useAuth } from "hooks/useAuth";
import { 
    PersonalWrapper, PersonalBar,
    PersonalArea, ChangeButton, AvatarWrapper, UserInfo,
    ButtonSet
} from "./UsersPersonalData.styled";
import { ChangeEmailForm, ConfirmPasswordForm } from "components/AuthForms";
import { useState } from "react";
import { getAuth, updateEmail, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { changeEmail } from "redux/authSlice";
import { useDispatch } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import Notiflix from 'notiflix';





export const UsersPersonalData = () => {
    const dispatch = useDispatch();
    const { email } = useAuth();
    const [emailFormStatus, setEmailFormStatus] = useState(false);
    const [confirmPasswordFormStatus, setConfirmPasswordFormStatus] = useState(false)

    const auth = getAuth();
    

    
    const hendleChangeEmail = (newEmail) => {

        updateEmail(auth.currentUser, newEmail).then(() => {

            dispatch(changeEmail(newEmail));
            setEmailFormStatus(false);
            Notiflix.Notify.success('Email changed successfully');
          }).catch((error) => {
            Notiflix.Notify.failure(error.message);
        });
 
    }

    const hendleConfirmData = async ({password}) => {
        setConfirmPasswordFormStatus(false);
        const user = auth.currentUser;
        const userProvidedPassword = password;

        const credential = EmailAuthProvider.credential(
            auth.currentUser.email,
            userProvidedPassword
        )

        reauthenticateWithCredential(user, credential).then(() => {
            console.log('User re-authenticated');
            setEmailFormStatus(true);
            Notiflix.Notify.success('Login confirmed');
          }).catch((error) => {
            Notiflix.Notify.failure('You entered the wrong password');
        })
    }

    const cancelForm = () => {
        setEmailFormStatus(false);
        setConfirmPasswordFormStatus(false);
    }

    return (
    <PersonalWrapper>

        <PersonalBar>
            <UserInfo>

                <AvatarWrapper>
                    <FaUserCircle/>
                </AvatarWrapper>

                
                <span className="personal__value">{email}</span>
            </UserInfo>
            
            
            <ButtonSet className="button-set"> 
                <li >

                    <ChangeButton type="button" onClick={() => {
                        setConfirmPasswordFormStatus(true)
                    }}>Change email</ChangeButton>

                </li>

                <li className="personal-password">

                    <ChangeButton type="button">Change password</ChangeButton>
                </li>
            </ButtonSet>
            
            
        </PersonalBar>

        <PersonalArea>
            
            
        </PersonalArea>
        {emailFormStatus === true &&
            <>
               
                <ChangeEmailForm hendleChangeEmail={hendleChangeEmail} cancelForm={cancelForm}/>

                <button type="button" onClick={() => {
                    setEmailFormStatus(false)
                }}>Cancel</button>
            </>
        }
        {confirmPasswordFormStatus === true && <ConfirmPasswordForm hendleConfirmData={hendleConfirmData} cancelForm={cancelForm}/>}
    </PersonalWrapper>
    )
}
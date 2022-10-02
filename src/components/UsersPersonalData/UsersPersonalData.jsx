import { useAuth } from "hooks/useAuth";
import { 
    PersonalWrapper, PersonalBar,
    PersonalArea, ChangeButton, AvatarWrapper, UserInfo,
    ButtonSet
} from "./UsersPersonalData.styled";
import { ChangeEmailForm, ChangePasswordForm, ConfirmPasswordForm } from "components/AuthForms";
import { useState } from "react";
import { getAuth, updateEmail, EmailAuthProvider, reauthenticateWithCredential, updatePassword, } from "firebase/auth";
import { changeEmail } from "redux/authSlice";
import { useDispatch } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import Notiflix from 'notiflix';
import { AvatarSet } from "components";





export const UsersPersonalData = () => {
    const dispatch = useDispatch();
    const { email } = useAuth();

    const [currentOptionActivated, setCurrentOptionActivated] = useState('');

    const [emailFormStatus, setEmailFormStatus] = useState(false);
    const [newPasswordFormStatut, setNewPasswordFormStatut] = useState(false);
    const [confirmPasswordFormStatus, setConfirmPasswordFormStatus] = useState(false);

    const [avatarSetStatus, setAvatarSetStatus] = useState(false)

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
    const hendleChangePassword = (data) => {
        const user = auth.currentUser;
        const newPassword = data;

        updatePassword(user, newPassword).then(() => {
            Notiflix.Notify.success('Password changed successfully');
            setNewPasswordFormStatut(false)
        }).catch((error) => {
            Notiflix.Notify.failure(error.message);
        });
      

    }

    const hendleConfirmData = async ({password}) => {
        
        const user = auth.currentUser;
        const userProvidedPassword = password;

        const credential = EmailAuthProvider.credential(
            auth.currentUser.email,
            userProvidedPassword
        )

        reauthenticateWithCredential(user, credential).then(() => {
            console.log('User re-authenticated');
            Notiflix.Notify.success('Password confirmed');

            if (currentOptionActivated === 'change-email') {
                setConfirmPasswordFormStatus(false);
                setEmailFormStatus(true);
                setCurrentOptionActivated('')
                return
            }
            if (currentOptionActivated === 'change-password') {
                setConfirmPasswordFormStatus(false);
                setNewPasswordFormStatut(true);
                setCurrentOptionActivated('');
                return
            }
            
            
          }).catch((error) => {
            Notiflix.Notify.failure('You entered the wrong password');
        })
    }

    const closeForm = () => {
        setEmailFormStatus(false);
        setConfirmPasswordFormStatus(false);
        setNewPasswordFormStatut(false);
        setCurrentOptionActivated('')
    }

    return (
    <PersonalWrapper>

        <PersonalBar>
            <UserInfo>

                <AvatarWrapper onClick={() => {
                    setAvatarSetStatus(true)
                }}>
                    <FaUserCircle/>
                </AvatarWrapper>

                
                <span className="personal__value">{email}</span>
            </UserInfo>
            
            
            <ButtonSet className="button-set"> 
                <li>

                    <ChangeButton type="button" className="button-set__change-email-btn" onClick={() => {
                        setConfirmPasswordFormStatus(true);
                        setCurrentOptionActivated('change-email');
                    }}>Change email</ChangeButton>

                </li>

                <li>

                    <ChangeButton type="button" className="button-set__change-password-btn" onClick={() => {
                        setConfirmPasswordFormStatus(true);
                        setCurrentOptionActivated('change-password');
                    }}>Change password</ChangeButton>
                </li>
            </ButtonSet>
            
            
        </PersonalBar>

        <PersonalArea>
            
            
        </PersonalArea>
        {emailFormStatus === true && <ChangeEmailForm hendleChangeEmail={hendleChangeEmail} closeForm={closeForm}/>}
        {newPasswordFormStatut === true && <ChangePasswordForm hendleChangePassword={hendleChangePassword} closeForm={closeForm}/>}
        {confirmPasswordFormStatus === true && <ConfirmPasswordForm hendleConfirmData={hendleConfirmData} closeForm={closeForm}/>}
        {avatarSetStatus === true && <AvatarSet/>}
    </PersonalWrapper>
    )
}
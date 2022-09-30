import { Section, Container } from "GlobalStyles";
import { RegisterForm } from "components";
import Notiflix from 'notiflix';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "redux/authSlice";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = ({email, password}) => {       

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            console.log(user);
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken
            }))
            navigate("succes")
        }).catch((error) => {
            Notiflix.Notify.failure('User with this email already exists');
            console.log(error.message);
        })

    };



    return (
        <Section className="rocket-details">
            <Container className="rocket-details__container">
                <RegisterForm handleSubmit={handleSubmit}/>
            </Container>
        </Section>
    )
}
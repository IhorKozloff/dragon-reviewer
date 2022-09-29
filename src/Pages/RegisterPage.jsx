import { Section, Container } from "GlobalStyles";
import { RegisterForm } from "components";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "redux/authSlice";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = ({email, password}) => {
        console.log(`форма прислала такие данные`, `мыло:`, email, `пароль:`,password);
        

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
        }).catch(console.error)

    };



    return (
        <Section className="rocket-details">
            <Container className="rocket-details__container">
                <RegisterForm handleSubmit={handleSubmit}/>
            </Container>
        </Section>
    )
}
import { Section, Container } from "GlobalStyles";
import { LoginForm } from "components";
import { useDispatch } from "react-redux";
import { setUser } from "redux/authSlice";
import Notiflix from 'notiflix';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = ({email, password}) => {
        console.log(`форма прислала такие данные`, `мыло:`, email, `пароль:`,password);
        

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password).then(({user}) => {
            console.log(user);
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken
            }))
            navigate("/")
        }).catch( error => {
            console.log(error.message)
            Notiflix.Notify.failure('There is no user with this email or password');
        })
        
            
        
    };


    return (
        <Section className="rocket-details">
            <Container className="rocket-details__container">
                <LoginForm handleSubmit={handleSubmit}/>
            </Container>
        </Section>
    )
}
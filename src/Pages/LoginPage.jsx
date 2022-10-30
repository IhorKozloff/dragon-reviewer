import { Section, Container } from "GlobalStyles";
import { LoginForm } from "components";

import { useDispatch } from "react-redux";
import { setUser } from "redux/authSlice";

import Notiflix from 'notiflix';

import { useNavigate } from "react-router-dom";

import { getUserData } from "API";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { setHistoryState, setAvatar } from "redux/favoritesSlice";

export default function LoginPage () {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const setFavoritesHistory = async (email) => {

        const res = await getUserData(email);

        if (res) {
            dispatch(setAvatar(res.avatar))
            dispatch(setHistoryState(res.data))
        } 
        
    }
    

    const handleSubmit = ({email, password}) => {


        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password).then(({user}) => {

            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken
            }))

            setFavoritesHistory(user.email);
            navigate("/");
            

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
import { Section, Container } from "GlobalStyles";
import { LoginForm } from "components";

import { useDispatch } from "react-redux";
import { setUser } from "redux/authSlice";

import Notiflix from 'notiflix';

import { useNavigate } from "react-router-dom";


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import db from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import { setHistoryState, setAvatar } from "redux/favoritesSlice";

export default function LoginPage () {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const setFavoritesHistory = async (email) => {
    
        const querySnapshot = await getDocs(collection(db, "usersFavorites"));

        querySnapshot.forEach((doc) => {
    
            if (doc.data().email === email) {
                dispatch(setAvatar(doc.data().avatar))
                dispatch(setHistoryState(doc.data().data))
            }
        })
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
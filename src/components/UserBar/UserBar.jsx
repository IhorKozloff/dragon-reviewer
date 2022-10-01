import { UserBarWrapper, LogOutButton, UserEmail, WishlistLinkWrapper, WishlistLink, WishlistCount } from "./UserBar.styled";

import { useAuth } from "hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "redux/authSlice";
import { clearFavorites } from "redux/favoritesSlice";

import { BsStar, BsStarFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { IconSVG } from "helpers/IconSvg";
import Media from 'react-media';

import { useNavigate, Link } from "react-router-dom";

import { doc, setDoc } from "firebase/firestore"; 
import db from "../../firebase";



export const UserBar = () => {
    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    const { favIds } = useSelector(state => state.favorites)
    const {isAuth, email} = useAuth();


    const saveFavoritesHistory = async () => {
        await setDoc(doc(db, "usersFavorites", email), {
            email,
            data: favIds,
        });
    }

    const hendleLogOut = async () => {
        await saveFavoritesHistory();
        dispatch(removeUser());
        dispatch(clearFavorites());
        navigate("/")
    }

    return (
        <>
            {isAuth === true &&
            <UserBarWrapper >
                <li>
                    <UserEmail title="Go to personal account">
                        <Link to="profile">

                            <Media query="(max-width: 767px)" render={() =>
                                (
                                    <FaUserCircle/>
                                )}
                            />
                            <Media query="(min-width: 768px)" render={() =>
                                (<>{email}</>
                                
                                )}
                            />
                        </Link>
                    </UserEmail>
                </li>


                <li>
                    {favIds.length === 0 && 
                    <WishlistLinkWrapper title="Go to favorites">
                        <WishlistLink to={"wishlist"}>
                            <BsStar/>
                        </WishlistLink>
                    </WishlistLinkWrapper>}
                    {favIds.length !== 0 && <WishlistLinkWrapper title="Go to favorites">
                        <WishlistLink to={"wishlist"}>
                            <BsStarFill className="no-empty-icon"/>
                            
                            <WishlistCount>{favIds.length}</WishlistCount>
                        </WishlistLink>
                    </WishlistLinkWrapper>}
                </li>

                
                <li>
                    <LogOutButton type="button" onClick={hendleLogOut} title="Log Out">
                        <IconSVG id="logout-btn-icon" width="28" height="28"/>
                    </LogOutButton>
                </li>
            </UserBarWrapper>}
        </>
    )
}
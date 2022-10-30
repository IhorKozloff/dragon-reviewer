import { UserBarWrapper, LogOutButton, UserEmail, WishlistLinkWrapper, WishlistLink, WishlistCount, UserAvatar } from "./UserBar.styled";

import { useAuth } from "hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "redux/authSlice";
import { clearFavorites, clearAvatar } from "redux/favoritesSlice";

import { BsStar, BsStarFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { IconSVG } from "helpers/IconSvg";
import Media from 'react-media';

import { useNavigate, Link } from "react-router-dom";

// import { doc, setDoc } from "firebase/firestore"; 
// import db from "../../firebase";
import { saveUserData } from "API"

import { getAvatarLinkById } from "helpers/getAvatarById";

export const UserBar = () => {
    const dispatch = useDispatch(); 
    const navigate = useNavigate();

    const { favIds, avatarId } = useSelector(state => state.favorites);
    const {isAuth, email} = useAuth();


    const saveFavoritesHistory = async () => {
        await saveUserData({
            email,
            data: favIds,
            avatar: avatarId
        })
        // await setDoc(doc(db, "usersFavorites", email), {
        //     email,
        //     data: favIds,
        //     avatar: avatarId
        // });
    }

    const hendleLogOut = async () => {
        await saveFavoritesHistory();
        dispatch(removeUser());
        dispatch(clearAvatar())
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

                            {avatarId === '' && <FaUserCircle/>}
                            
                            {avatarId !== '' && <UserAvatar>
                                <img src={`${getAvatarLinkById(avatarId)}`} alt='avengers avatar icon'/>
                            </UserAvatar>}
                            
                            
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
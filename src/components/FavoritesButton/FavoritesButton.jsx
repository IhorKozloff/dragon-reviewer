import { BsStar, BsStarFill } from "react-icons/bs"
import { FavoritesButtonWrapper, UnAuthrizedTooltipWrapper, UnAuthrizedTooltip, Triangle, TolltipLink } from "./FavoritesButton.styled";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addOrRemoveFavorites } from "redux/favoritesSlice";
import { useAuth } from "hooks/useAuth";
import { useEffect } from "react";



export const FavoritesButton = ({itemId, favStatus}) => {

    const [ activeStatus, setActiveStatus ] = useState(favStatus);
    
    const dispatch = useDispatch();
    const { isAuth } = useAuth();
    
    const hendleFavoritesButton = () => {

        console.log('favorites button clicked');
        setActiveStatus(!activeStatus);
        dispatch(addOrRemoveFavorites(itemId))
    }

    useEffect(() => {
        if (isAuth === false) {
            setActiveStatus(false)
        }
    },[isAuth])

    return (
        <FavoritesButtonWrapper activeStatus={activeStatus} isAuth={isAuth} className="favorites-button-wrapper">
            <button type="button" onClick={hendleFavoritesButton}>
                {activeStatus === false && <BsStar className="disabled-icon"/>}
                
                {activeStatus === true && <BsStarFill className="enabled-icon"/>}
            </button>
            <UnAuthrizedTooltipWrapper className="un-authrized-tooltip">
                <UnAuthrizedTooltip>
                    <Triangle className="triangle"/>
                    <p>Please <TolltipLink to={"/login"}>log in</TolltipLink> to add the rocket to your favorites.</p>
                </UnAuthrizedTooltip>
            </UnAuthrizedTooltipWrapper>
        </FavoritesButtonWrapper>
    )
}
import { BsStar, BsStarFill } from "react-icons/bs"
import { FavoritesButtonWrapper, UnAuthrizedTooltipWrapper, UnAuthrizedTooltip, Triangle, TolltipLink } from "./FavoritesButton.styled";
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { addOrRemoveFavorites } from "redux/favoritesSlice";
import { useAuth } from "hooks/useAuth";
import { useEffect } from "react";



export const FavoritesButton = ({itemId}) => {
    const dispatch = useDispatch();
    const { isAuth } = useAuth();
    const {favIds} = useSelector((state) => state.favorites);
    
    const [ activeStatus, setActiveStatus ] = useState('disabled');

    
   

    const hendleFavoritesButton = () => {

        if (favIds.includes(itemId)) {
            setActiveStatus('disabled');
        } else {
            setActiveStatus('enabled');
        }

        dispatch(addOrRemoveFavorites(itemId))
    }

    useEffect(() => {
        if (isAuth === false) {
            setActiveStatus('disabled')
        } 
        
    },[isAuth]);

    useEffect(() => {
        if (favIds.includes(itemId)) {
            setActiveStatus('enabled')
        } else { 
            setActiveStatus('disabled')
        }
        
    },[favIds, itemId]);




    return (
        <FavoritesButtonWrapper activeStatus={activeStatus} isAuth={isAuth} className="favorites-button-wrapper">
            <button type="button" onClick={hendleFavoritesButton}>
                {activeStatus === "disabled" && <BsStar className="disabled-icon"/>}
                
                {activeStatus === 'enabled' && <BsStarFill className="enabled-icon"/>}
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
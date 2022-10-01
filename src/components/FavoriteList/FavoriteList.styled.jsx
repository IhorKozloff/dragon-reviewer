import styled from "styled-components";
import { Link } from "react-router-dom";


import mainItemsTabletWallpaper from "img/favorite-wallpaper/planets.png";
import mainItemsDesctopWallpaper from "img/favorite-wallpaper/planet.png";
import mainItemBotLeft from "img/favorite-wallpaper/planet2.png";
import topLeft from "img/favorite-wallpaper/top-left.png"
import bot from "img/favorite-wallpaper/bot.png";
import hatch from "img/favorite-wallpaper/Decore 1.png";


export const FavoriteListTittle = styled.h3`
    text-align: center;
    margin: 20px 0;
    font-family: var(--secondaryFont);
`;
export const FavoriteListWrapper = styled.ul``;

export const DesctopPlug = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url("${topLeft}"), url("${bot}");
    background-repeat: no-repeat;
    background-position: top left, bottom right;
    background-size: 20%, 40%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & span {
        display: block;
        font-size: 36px;
        font-weight: var(--bold);
    }

`
export const FavoriteListItem = styled.li`
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;

    

    &:not(last-of-type) {
        margin-bottom: 20px;
    }
    position: relative;

    &:hover {
        transform: scale(1.01);
    }

    

    & .thumb {
        width: 60%;
        height: 250px;
        border-radius: 10px;
        overflow: hidden;
    }
`;
export const FavoriteLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    color: black;
    &:hover {
        color: black;
    }
    
`;
export const FavoriteImage = styled.img`
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
`;
export const FavoriteDescription = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px;
    width: 38%;
    overflow: hidden;
    background-color: white;
    background-image: url("${mainItemsTabletWallpaper}"), url("${hatch}");
    background-repeat: no-repeat;
    background-position: top 140px right -220px, top 22px left 5px;
    background-size: auto, 100%;

    @media screen and (min-width: 768px) {
        background-position: top 140px right -220px, top 30px center;
        background-size: auto, 60%;
    }

    @media screen and (min-width: 1280px) {
        background-image: url("${mainItemsDesctopWallpaper}"), url("${mainItemBotLeft}"),  url("${hatch}");
        background-position: bottom right, bottom left, top 30px center;
        background-size: auto, auto, 40%;
    }
`;

export const FavoriteDescriptionName = styled.p`
   text-align: center;
   font-family: var(--baseFont);
   font-weight: var(--bold);

   @media screen and (min-width: 768px) {
    font-size: 24px;
   }
`;
export const FavoriteDescriptionStatsList = styled.ul`
    margin-top: 25px;
    font-family: var(--baseFont);

    @media screen and (min-width: 1280px) {
        margin-top: 45px;
    }

    & li {
        display: flex;
        align-items: center;
        justify-content: center;
        &:not(last-of-type) {
            margin-bottom: 15px;
        }


        & .stat-icon {
            width: 25px;
            height: 25px;
            margin-right: 5px;
        }
        & .stat-title {
            
            margin-right: 5px;
        }
        & .stat-value {
            font-weight: var(--bold);
            margin-right: 3px;
        }
    }
`;

export const RemoveButton = styled.button`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: white;

    color: grey;
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    left: 15px;
    top: 15px;

    &:hover {
        color: red;
    }


    & svg {
        width: 40px;
        height: 40px;
        pointer-events: none;
    }
    @media screen and (min-width: 768px) {
        left: 100%;
        transform: translateX(-130%);
        
    }
    
`;
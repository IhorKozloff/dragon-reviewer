import styled from "styled-components";
import { Link } from "react-router-dom";

export const RocketsList = styled.ul`
    display: flex;
    margin-bottom: 40px;
    margin-top: -20px;
    flex-flow: row wrap;

    @media screen and (min-width: 768px) {
        margin-right: -15px;
        margin-left: -15px;
        display: flex;
        flex-flow: row wrap;
    }
`;

export const RocketsListItem = styled.li`
    position: relative; 
    

    box-sizing: border-box;
    border-radius: 10px;
    overflow: hidden;
    

    &:hover {
        transform: scale(1.01);
    }
    margin: 20px auto auto auto;

    width: 99%;

    @media screen and (min-width: 280px) {
        width: 280px;
    }
    @media screen and (min-width: 768px) {
        margin-right: 15px;
        margin-left: 15px;
        width: calc((100% - 4 * 15px) / 2);
    }

    @media screen and (min-width: 1280px) {
        margin-right: 15px;
        margin-left: 15px;
        width: calc((100% - 6 * 15px) / 3);
    }

`;

export const RocketImage = styled.img`
    display: block;
    width: 100%;
    height: 260px;


    @media screen and (min-width: 768px) {
        height: 300px;
    }

    @media screen and (min-width: 1280px) {
        height: 350px;
    }

`;

export const RocketLink = styled(Link)`
    text-decoration: none;
    color: white;
    display: block;

    &:hover {
        cursor: pointer;
        color: white;
    }

    
`;

export const RocketDescription = styled.div`
    background-image: linear-gradient(to top left, #5D095F, #09395F);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px;

    font-family: var(--baseFont);

    & span {
        dispaly: block;
    }
`;
export const RocketDescriptionName = styled.span`
    font-family: var(--secondaryFont);
`;
export const RocketDescriptionStatsList = styled.ul`
    padding: 10px;
`;
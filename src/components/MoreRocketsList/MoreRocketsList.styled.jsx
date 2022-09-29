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
    
    border: 1px solid black;

    box-sizing: border-box;


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
    height: 240px;

    @media screen and (min-width: 190px) {
        height: 300px;
    }

    @media screen and (min-width: 260px) {
        height: 350px;
    }

    @media screen and (min-width: 280px) {
        height: 398px;
    }

    @media screen and (min-width: 768px) {

    }

    @media screen and (min-width: 1024px) {

    }

`;

export const RocketLink = styled(Link)`
    text-decoration: none;
    color: #000;
    display: block;
    &:hover {
        cursor: pointer;
    }
`;

export const RocketDescription = styled.div`
    background-color: aqua;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & span {
        dispaly: block;
    }
`;
export const RocketDescriptionName = styled.span`

`;
export const RocketDescriptionStatsList = styled.ul`

`;
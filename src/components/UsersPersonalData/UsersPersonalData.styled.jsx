import styled from "styled-components";

import areaWallpaper  from "img/userPersonal/20945760.jpg";

export const PersonalWrapper = styled.div`
    height: 80vh;
    display: flex;
    justify-content: space-between;
    
`
export const PersonalBar = styled.div`
    width: 100%;
    @media screen and (min-width: 768px) {
        border-right: 2px solid black;
        padding-right: 20px;
        width: 40%;

    }
`;
export const PersonalArea = styled.div`
display: none;
@media screen and (min-width: 768px) {
    display: block;
    width: 58%;
    padding: 20px;
    background-image: url('${areaWallpaper}');
    background-repeat: no-repeat;
    background-position: top;
    background-size: contain;
}


`;
export const ChangeEmailFormWrapper = styled.div`
    border: 1px solid black;
    width: 100%;
    @media screen and (min-width: 768px) {
        width: 320px;
    }
`;
export const ChangeButton = styled.button`

    width: 100%;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    text-decoration: none;
    border-radius: 10px;
    font-size: 14px;
    line-height: 14px;
    padding: 12px 30px;
    color: #FFF;
    font-weight: bold;
    text-transform: uppercase;
    font-family: var(--baseFont);
    background: #337AB7;
    cursor: pointer;
    border: 2px solid #BFE2FF;
    outline: 1px solid;
    outline-color: #337AB7;
    outline-offset: 0px;
    text-shadow: none;
    transition: all 1.5s cubic-bezier(0.19, 1, 0.22, 1);
    &:hover {
        box-shadow: inset 0 0 20px #BFE2FF;
        outline-color: rgba(255, 255, 255, 0);
        outline-offset: 15px;
        color: #FFF;
    }
`;

export const UserInfo = styled.div`
    background-color: var(--background-gray);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 20px;
    & span {
        font-family: var(--secondaryFont);
        font-size: 14px;
        font-weight: var(--bold); 
    }
`;
export const AvatarWrapper = styled.div`
    & svg {
        width: 120px;
        height: 120px;
        margin-bottom: 10px;
    }
`;
export const ButtonSet = styled.ul`
    background-color: var(--background-gray);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 20px;
    margin-top: 15px;
    & li {
        width: 100%;
    }
`;

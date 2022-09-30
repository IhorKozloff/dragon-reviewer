import styled from 'styled-components';
import hex from "img/rocket-details/hex.png";


export const RocketDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    

    & p {
        color: black;
    }
    
    @media screen and (min-width: 768px) {
        background-image: url('${hex}');
        background-repeat: no-repeat;
        background-position: bottom left;
        background-size: 100px 100px;
    }
`;


export const RocketNameWraprer = styled.div`
    padding: 20px 0;
    position: relative;


    &:after {
        content: '';
        width: 100%;
        height: 2px;
        background-color: brown;

        position: absolute;
        bottom: 0;
        left: 0;
    }
`;
export const RocketWikiLink = styled.a`
    text-transform: uppercase;
    text-align: center;
    font-family: var(--secondaryFont);
    font-size: 14px;
    font-weight: var(--bold);
    text-decoration: none;
    margin-bottom: 60px;
    &:hover {
        text-decoration: underline;
    }

`;
export const RocketDescriptionTextWrapper = styled.div`
    width: 80%;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: var(--baseFont);
`;
export const TittleWrapper = styled.div`
    color: grey;
    display: flex;
    align-items: center;
    font-family: var(--baseFont);
    font-size: 16px;
    & svg {
        margin-right: 5px;
    }
`;
export const ValueWrapper =styled.div`
    font-family: var(--secondaryFont);
    padding-left: 20px;
`;
export const StatsList = styled.ul`
    display: flex;
    margin-top: 20px;
    & li {
        &:not(:last-of-type) {
            margin-right: 25px;
        }
    }
`;
export const StatsTittle = styled.h5`
    text-align: center;
`
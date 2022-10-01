import styled from "styled-components";
import { Link } from "react-router-dom";

export const FavoritesButtonWrapper = styled.div`
    position: absolute;
    top: 10px;
    right: 30px;
    
    &:hover {
        & .un-authrized-tooltip {
            ${props => props.isAuth === true 
                ? `opacity: 0;
                   pointer-events: none;` 
                : `opacity: 1;
                   pointer-events: all;`
                   
            } 
        }
    }

    & button {
        width: 40px;
        height: 40px;
        background-color: white;
        border-radius: 50%;
        pointer-events:${props => props.isAuth === true ? "all" : "none"};
        border:${props => props.activeStatus === 'enabled' ? "1px solid orange" : "1px solid var(--gray)"};
        
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            border: 1px solid orange;
            & svg {
                fill: orange;
            }
        }

        &:active {
            transform: scale(0.9);
        }
    }

    & svg {
        width: 20px;
        height: 20px;
    }

    & .disabled-icon {
        fill: var(--gray);
    }

    & .enabled-icon {
        fill: orange;
    }
`;
export const UnAuthrizedTooltipWrapper = styled.div`
    height: 110px;
    padding-top: 30px;
    position: absolute;
    top: 30px;
    left: -125px;
    pointer-events: none;
    opacity: 0;
    transition: opacity 500ms ease;
`;
export const UnAuthrizedTooltip = styled.div`
    width: 180px;
    height: 80px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    
    
    color: white;
    background-color: #4A56E2;
    
    

    
`
export const Triangle = styled.div`
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-right-width: 20px;
    border-left-width: 20px;
    border-bottom: 20px solid #4A56E2;
    position: absolute;
    top: 12px;
    right: 15px;
`;
export const TolltipLink = styled(Link)`
    color: #FED057;
    &:hover {
        color: #EB6F6F;
    }
`;
import styled from "styled-components";
import { Link } from "react-router-dom";

export const UserBarWrapper = styled.ul`
    display: flex;
    align-items: center;

    & li {
        &:not(:last-of-type) {
            margin-right: 10px;
        }
        
    }
`;
export const LogOutButton = styled.button`
    & svg {
        fill: grey;
    }
    &:hover {
        & svg {
            fill: black;
        }
    }
`;
export const UserEmail = styled.div`
    
    color: grey;
    cursor: pointer;
    font-weight: var(--bold);
    

    &:hover {
        & a {
            color: black;
        }
        & svg {
           opacity: 0.8;
        }

    }

    & a {
        color: grey;
        display: flex;
        align-items: center;
    }
    & svg {
        width: 30px;
        height: 30px;
        color: green;
    }
`
export const WishlistLinkWrapper = styled.div`
    &:hover {
        & svg {
            opacity: 0.8;
        }
    }
`;

export const WishlistLink = styled(Link)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 8px;
    color: grey;

    & .no-empty-icon {
        color: orange;
    }
    & svg {
        width: 30px;
        height: 30px;
    }
    &:hover {
        color: orange;
    }
`;
export const WishlistCount = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: red;
    color: white;
    position: absolute;
    bottom: 0;
    right: 0;
    text-align: center;
    font-size: 8px;
    font-weight: var(--bold);
`;
export const UserAvatar = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
    & img {
        display: block;
        height: 100%;
        width: 100%;
      
        object-fit: cover;
    }
`;
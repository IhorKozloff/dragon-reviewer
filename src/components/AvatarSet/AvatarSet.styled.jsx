import styled from "styled-components";


export const AvatarList = styled.ul`
    background-color: white;
    display: flex;
    flex-flow: row wrap;
    padding: 40px 20px 20px 20px;
    border-radius: 20px;
    width: 280px;
    justify-content: center;
    align-items: center;
    position: relative;

    @media screen and (min-width: 768px) {
        width: 420px;
    }
    @media screen and (min-width: 1280px) {
        width: 800px;
    }
`;
export const AvatarListItem = styled.li`
    border-radius: 50%;
    overflow: hidden;
    margin: 5px;
    &:hover {
        transform: scale(1.1);
    }
`;
export const AvatarImgThumb = styled.div`
    width: 50px;
    height: 50px;
    cursor: pointer;
    
    & img {
        display: block;
        height: 100%;
        width: 100%;
      
        object-fit: cover;
    }
    @media screen and (min-width: 768px) {
        width: 100px;
        height: 100px;
    }
    @media screen and (min-width: 1280px) {
        width: 200px;
        height: 200px;
    }
`

export const CloseButton = styled.button`
    width: 40px;
    height: 40px;
    position: absolute;
    top: 5px;
    right: 5px;
    color: red;
    z-index: 2000;
    &:active {
        transform: scale(0.9);
    }
    & svg {
        width: 35px;
        height: 35px;
    }
`;
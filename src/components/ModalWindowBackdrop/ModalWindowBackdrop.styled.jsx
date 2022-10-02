import styled from "styled-components";

export const ModalWindowBackdropWrapper = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1002;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${props => props.theme === 'dark' 
        ? "background-image: linear-gradient(rgba(47, 48, 58, 0.85), rgba(47, 48, 58, 0.85));" 
        : "background-color: transparent;"
    }
`;
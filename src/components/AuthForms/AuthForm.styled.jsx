import styled from 'styled-components';
import { Form, Field } from "formik";
import { Link } from "react-router-dom";

export const AuthFormWrapper = styled(Form)`
    width: 100%;
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
    background-color: var(--white);
    border-radius: 20px;
    padding: 32px 20px 36px 20px;
    box-sizing: border-box;
  
    &.login-form {
        padding: 32px 20px 36px 20px;
        height: 588px;
        & .login-form__login-button {
            margin-top: 74px;
        }
    }


    @media screen and (min-width: 768px) {
        padding: 40px 59px 66px 65px;
        width: 500px;
        margin: 0 auto;
    }

    & input {
        width: 100%;
    }

`;

export const FieldsList = styled.ul`
    margin-top: 60px;
    margin-bottom: 40px;
    width: 100%;
    & li {
        position: relative;
        border-bottom: 1px solid var(--light-gray);
        padding-bottom: 6px;
        padding-left: 55px;

        &:not(:last-of-type) {
            margin-bottom: 40px;
        }

        
        & svg {
            position: absolute;
            left: 0;
            top: 0;
        }
    }
`;


export const AuthFormInput = styled(Field)`
    outline: none;
    border: none;
    margin: 0;
    padding: 0;

    font-family: var(--baseFont);
    font-style: normal;
    font-weight: var(--regular);

    font-size: 18px;
    line-height: 27px;

    color: var(--gray);
`;



export const AuthButton = styled.button`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: var(--white);
    background-color: var(--green);
    border-radius: 20px;

    &:active {
    transform: scale(0.9);
    }
    margin-bottom: 20px;
`;

export const RedirectButton = styled(Link)`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: var(--active-blue);
    border: 1px solid var(--active-blue);
    border-radius: 20px;
    text-decoration: none;

    &:active {
        transform: scale(0.9);
    }
`;
export const CancelButton = styled.button`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: var(--active-blue);
    border: 1px solid var(--active-blue);
    border-radius: 20px;

    &:active {
        transform: scale(0.9);
    }
`;
export const FormTitle = styled.p`
    margin-top: 40px;
    font-family: var(--secondaryFont);
    font-size: 20px;
    font-weight: var(--bold);
`;

export const FormBackDrop = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1002;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(rgba(47, 48, 58, 0.85), rgba(47, 48, 58, 0.85));
`;
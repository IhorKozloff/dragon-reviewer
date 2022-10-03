import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    input {
        box-sizing: border-box;
    }
    h1,h2,h3,h4,p,span {
        margin: 0;
        padding: 0;
    }
    ul {
        list-style:none;
        margin: 0;
        padding: 0; 
    }
    button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        box-sizing: border-box;
        display: flex;
    }
    
    :root {
        --black: #000000;
        --gray: #bdbdbd;
        --light-gray: #E0E0E0;
        --background-gray: #E5E5E5;
        --white: #ffffff;
        --green: #24CCA7;
        --active-blue: #4A56E2;
        --baseFont: 'Circe', sans-serif;
        --secondaryFont: 'Poppins', sans-serif;
        --regular: 400;
        --bold: 700;
`;
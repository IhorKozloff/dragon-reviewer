import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    padding: 10px 0;
    //background-color: green;
    
    & .header__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        border-radius: 10px;
        padding: 5px;
    }
`;
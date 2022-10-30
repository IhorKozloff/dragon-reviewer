import styled from "styled-components";

export const PasswordSecureLableWrapper = styled.div`
    
`;

export const PasswordSecureLable = styled.div`
   
    position: absolute;
    bottom: -7px;
    left: 0;

    height: 3px;
    border-radius: 3px;

    width: ${props => props.secureLableProps.width};
    background-color: ${props => props.secureLableProps.color};


    transition: all 1500ms cubic-bezier(0.4, 0, 0.2, 1);

`;


import styled from 'styled-components';

import logoImg from "../../img/logo/logo-img.png"
import logoTxt from "../../img/logo/logo-txt.png"

export const LogoWrapper = styled.div`
    display: flex;
`;
export const LogoIcon = styled.div`
    width: 50px;
    height: 40px;
    //margin-right: 10px;
    background-image: url(${logoImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

`;
export const LogoTxt = styled.div`

    width: 200px;
    height: 40px;

    background-image: url(${logoTxt});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left 10px top 5px;
`;
import styled from 'styled-components';
import mainThemeWallpaper from "../img/main-them-wallpaper.jpg"

export const Section = styled.section`
    //background-image: url('${mainThemeWallpaper}');
    background-repeat: no-repeat;
    backgroun-size: cover;
    background-color: pink;
    padding-top: 60px;
    padding-bottom: 60px;
`;

export const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    background-color: var(--background-light-grey);
    box-sizing: border-box;
    
    @media screen and (min-width: 320px) {
        width: 320px;
    }
    @media screen and (min-width: 768px) {
        width: 705px;
    }
    @media screen and (min-width: 1280px) {
        width: 1245px;
    }

`;
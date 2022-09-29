
import { FooterWrapper, Author} from './Footer.styled';
import { Container } from 'GlobalStyles';

export const Footer = () => {
    return (
        <FooterWrapper className="footer">
            <Container className='footer-container'>
                <p className="copyright">©  2022 | All Rights Reserved | </p>
                <p className="developed">
                    Developed by                  
                    <Author className="company"> Ihor Kozlov</Author>
                </p>
            </Container>
            
        </FooterWrapper>
    );
};
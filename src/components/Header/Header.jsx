import { HeaderWrapper } from "./Header.styled";
import { Logo, Navigation, UserBar } from "components";
import { Container } from "GlobalStyles/SectionContainer.styled";

export const Header = () => {

    

    return (
        <HeaderWrapper className="header">
            <Container className="header__container">
                <Logo/>
                <Navigation/>
                <UserBar/>
            </Container>
        </HeaderWrapper>
    )
}
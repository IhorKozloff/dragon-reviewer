import { Section, Container } from "GlobalStyles";
import { UsersPersonalData } from "components";

export default function UserProfilePage () {


    return (
        <Section className="favorites">
            <Container className="favorites__container">
                <UsersPersonalData/>
            </Container>
        </Section>
    )
}
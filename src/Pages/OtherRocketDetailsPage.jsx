import { OtherRocketBar, MoreRocketsList } from "components";
import { Section, Container } from "GlobalStyles";

export default function OtherRocketDetailsPage () {


    return (
        <>
            <Section className="rocket-details">
                <Container className="rocket-details__container">
                    <OtherRocketBar/>
                </Container>
            </Section>
            
            <Section className="more-rocket">
                <Container className="more-rocket__container">
                    <MoreRocketsList/>
                </Container>
            </Section>
            
        </>
    )
}
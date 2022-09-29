import { Link } from "react-router-dom";
import {Section, Container} from "GlobalStyles";
export const RegisterSucces = () => {




    return (
      <>
        <Section className="rocket-details">
          <Container className="rocket-details__container">
            <div>Yeah! Registration completed successfully. </div>
            <Link to={"/"}>Go to home page</Link>
          </Container>
        </Section>
  

      </>
    );
  }
import { Link } from "react-router-dom";
import {Section, Container} from "GlobalStyles";
export default function ErrorPage () {




    return (
      <>
        <Section className="rocket-details">
          <Container className="rocket-details__container">
            <div style={{height: "100vh"}}>
                Oops! something wrong... :(
                <Link to={"/"}>Go to home page</Link>
            </div>
            
          </Container>
        </Section>
  

      </>
    );
  }
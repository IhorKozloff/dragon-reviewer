import { Link } from "react-router-dom";
import {Section, Container} from "GlobalStyles";
export default function ErrorPage () {




    return (
      <>
        <Section className="error-page">
          <Container className="error-page__container">
            <div style={{height: "100vh", padding: "60px", textAlign: "center"}}>
                Oops! something wrong... :(
                <Link to={"/"} style={{marginLeft: "10px"}}>Go to home page</Link>
            </div>
            
          </Container>
        </Section>
  

      </>
    );
  }
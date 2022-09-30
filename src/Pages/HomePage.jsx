import { MoreRocketsList, MainRocketBar } from "components";
import { Section, Container } from "GlobalStyles";

import { useEffect } from "react";

import { fetchMainRocketInfo, fetchMoreRocketsInfo } from "redux/operations";
import { useDispatch } from "react-redux";



export const HomePage = () => {

 const dispatch = useDispatch();
  
 
  useEffect(() => {

    dispatch(fetchMainRocketInfo());
    dispatch(fetchMoreRocketsInfo());

  },[dispatch])


  return (
    <>
      <Section className="rocket-details">
        <Container className="rocket-details__container">
          <MainRocketBar/>
        </Container>
      </Section>

      <Section className="more-rocket">
        <Container className="more-rocket__container">
          <h3 style={{textAlign: "center", marginBottom: "40px", fontWeight: "var(--bold)"}}>See more our developments</h3>
          <MoreRocketsList/>
        </Container>
      </Section>
    </>
    
  );
}


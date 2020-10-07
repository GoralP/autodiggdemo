import React from "react";
import { Container, Row, Col } from "reactstrap";
import Navigation from "../components";
import { LocalDealers, CarPreferences } from "../containers";

const Home = () => {
  return (
    <div className="">
      <Navigation />
      <Container className="main-banner" fluid={true}>
        <Container>
          <Row>
            <Col sm="5" className="main-banner-left-side">
              <LocalDealers />
            </Col>
            <Col sm="5" className="main-banner-right-side shadow">
              {/* <CarPreferences /> */}
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Home;

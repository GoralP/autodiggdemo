import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Navigation, Footer } from "../components";
import {
  LocalDealers,
  CarPreferences,
  Work,
  Login,
  Register,
  ContactUS,
} from "../containers";

const Home = () => {
  return (
    <>
      <Navigation />
      <Container className="main-banner" fluid={true}>
        <Container>
          <Row className="banner-container">
            <Col sm="5" className="main-banner-left-side">
              <LocalDealers />
            </Col>

            <Col sm="5" md="6" className="main-banner-right-side">
              <Row className=" right-side-box  shadow">
                <CarPreferences />
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="work-container how-does-it-work" fluid={true}>
        <Work />
      </Container>
      <Container fluid={true} className="text-center">
        <Row>
          <Col sm="6" className="dealer">
            <Login />
          </Col>
          <Col sm="6" className="buyer">
            <Register />
          </Col>
        </Row>
      </Container>
      <Container fluid={true} className="contact-us-bg">
        <ContactUS />
      </Container>
      <Container fluid={true} className="footer-bg">
        <Footer />
      </Container>
    </>
  );
};

export default Home;

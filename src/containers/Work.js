import React from "react";
import { Container, Row, Col } from "reactstrap";
import selectIcon from "../images/panels-icon-1.png";
import informationIcon from "../images/panels-icon-2.png";
import personalizedIcon from "../images/panels-icon-3.png";
import connectIcon from "../images/panels-icon-4.png";
import exchangeIcon from "../images/panels-icon-5.png";
import { Competitors } from "../containers";

const Work = () => {
  return (
    <>
      <h1 className="home-title">How Does It Work?</h1>
      <Row className="pad-normal">
        <Col sm="12" className="panels">
          <Row>
            <Col sm="8" className=" panel-box-bg">
              <Row>
                <Col sm="1"></Col>
                <Col sm="6" className="text-center">
                  <h4 className="work-content-title">Select Car Preference</h4>
                  <div className="work-content">
                    Provide your car type, make, model and other preferences.
                  </div>
                </Col>
                <Col sm="1"></Col>
                <Col sm="3">
                  <img alt="Select car icon" src={selectIcon} />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col sm="4"></Col>
            <Col sm="8" className=" panel-box-bg panel-box">
              <Row>
                <Col sm="2"></Col>
                <Col sm="2">
                  <img alt="Information icon" src={informationIcon} />
                </Col>
                <Col sm="1"></Col>
                <Col sm="6" className="text-center">
                  <h4 className="work-content-title">Information Broadcast</h4>
                  <div className="work-content">
                    Preferences are sent to dealers without sharing your contact
                    information.
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col sm="8" className=" panel-box-bg">
              <Row>
                <Col sm="1"></Col>
                <Col sm="6" className="text-center">
                  <h4 className="work-content-title">Personalized Offer</h4>
                  <div className="work-content">
                    Receive multiple bids from the Dealers.
                  </div>
                </Col>
                <Col sm="1"></Col>
                <Col sm="3">
                  <img alt="Personalized icon" src={personalizedIcon} />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col sm="4"></Col>
            <Col sm="8" className=" panel-box-bg panel-box">
              <Row>
                <Col sm="2"></Col>
                <Col sm="2">
                  <img alt="Information icon" src={connectIcon} />
                </Col>
                <Col sm="1"></Col>
                <Col sm="6" className="text-center">
                  <h4 className="work-content-title">
                    Connect And Communicate
                  </h4>
                  <div className="work-content">
                    Read offer details, chat and negotiate.
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col sm="8" className=" panel-box-bg">
              <Row>
                <Col sm="1"></Col>
                <Col sm="6" className="text-center">
                  <h4 className="work-content-title">
                    Exchange Contact Infromation
                  </h4>
                  <div className="work-content">
                    Like the bid and schedule a test drive.
                  </div>
                </Col>
                <Col sm="1"></Col>
                <Col sm="3">
                  <img alt="Personalized icon" src={exchangeIcon} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="competitors-container">
        <Col sm="12">
          <Competitors />
        </Col>
      </Row>
    </>
  );
};

export default Work;

import React from "react";
import { Row, Col } from "reactstrap";
import privacyIcon from "../images/icon_1.png";
import sourceIcon from "../images/icon_2.png";
import personalizedIcon from "../images/icon_3.png";

const Competitors = () => {
  return (
    <>
      <div className="competitors-section-heading">
        <h2 className="">What Differentiates us from our Competitors?</h2>
        <span>Why us?</span>
      </div>
      <Row className="differentiates-box">
        <Col sm="4">
          <div className="differentiates-icon">
            <img alt="Privacy icon" src={privacyIcon} />
          </div>
          <div>
            <h4>Privacy Control</h4>
            <ul>
              <li>
                - You decide when to share your contact details and with whom.
              </li>
              <li>
                - We don't share or sell your personal information with anyone.
              </li>
            </ul>
          </div>
        </Col>
        <Col sm="4">
          <div className="differentiates-icon">
            <img alt="Source icon" src={sourceIcon} />
          </div>
          <div>
            <h4>Go Right to the Source</h4>
            <ul>
              <li>- Connect directly with local Dealerships.</li>
              <li>- Communicate directly in real time.</li>
            </ul>
          </div>
        </Col>
        <Col sm="4">
          <div className="differentiates-icon">
            <img alt="Personalized icon" src={personalizedIcon} />
          </div>
          <div>
            <h4>Personalized, Fair and Free</h4>
            <ul>
              <li>- AutoDigg is open, fair, and free.</li>
              <li>
                - Receive personalized offer rather than redundant list of cars.
              </li>
              <li>- No pressure, walk away anytime without any obligation.</li>
            </ul>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Competitors;

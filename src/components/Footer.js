import React from "react";
import { Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <Row>
      <Col sm="4">
        <h5 className="footer-title">Sitemap</h5>
        <div className="footer-text">Homepage</div>
        <div className="footer-text">How it Works</div>
        <div className="footer-text">Blog</div>
      </Col>
      <Col sm="4">
        <h5 className="footer-title">Contact Us</h5>
        <div className="footer-text">support@autodigg.com</div>
      </Col>
      <Col sm="4">
        <h5 className="footer-title">Follow Us</h5>
      </Col>
      <Col sm="12">
        <p className="footer-text">
          Copyright 2020. All rights reserved by: AutoDigg
        </p>
        <p className="footer-text">
          Registration on or use of this site constitutes acceptance of our
          <span className="footer-copy-right">Terms of Service</span> and{" "}
          <span className="footer-copy-right">Privacy Policy</span>
        </p>
        <p className="footer-copy-right footer-text">
          Frequently Asked Questions
        </p>
      </Col>
    </Row>
  );
};

export default Footer;

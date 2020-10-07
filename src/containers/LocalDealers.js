import React from "react";
import autodiggVideo from "../images/autodigg-video-thumb.jpg";

const LocalDealers = () => {
  return (
    <div>
      <h1 className="local-dealer">
        Receive Competing Offers from Your Local Dealers.
      </h1>
      <p className="local-dealer-subtitle mb-4">
        We NEVER Share Your Contact Information with ANYONE.
      </p>
      <img alt="See what we're all about" src={autodiggVideo}></img>
    </div>
  );
};

export default LocalDealers;

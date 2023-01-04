import React from "react";
import MainProductItem from "../components/MainItem/MainProductItem";

function LandingPage() {
  return (
    <div className="landingPage" id="landingPage">
      <div className="container">
        <div className="row">
        <div className="pageTitle">
            <h1>Assignment 1</h1>
        </div>
          <div className="mainProductGrid">
              <MainProductItem/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

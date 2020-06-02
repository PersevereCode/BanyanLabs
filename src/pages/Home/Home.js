import React, { Component } from "react";
import Carousel from "../../components/Carousel";
import WhatWeDo from "../../components/WhatWeDo";
import WhoWeAre from "../../components/WhoWeAre";
import Information from "../../components/Information";

export default class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container-fluid n-p p-0">
        <Carousel />
        <div className="container-fluid n-p p-0">
          <WhoWeAre />
          <WhatWeDo />
        </div>
        <div className="container-fluid n-p p-0">
          <Information />
        </div>
      </div>
    );
  }
}

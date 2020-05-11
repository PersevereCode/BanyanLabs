import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import "./Mission.css";

export default class Mission extends Component {
  render() {
    const colors = {
      main: "#24234d",
      primary: "#1b723f",
      secondary: "#511135",
      accent: "#494d83",
    };
    return (
      <div className="main">
        <Row className="header">
          <Container className="p-4 text-center">
            <h1 className="display-3">Mission</h1>
          </Container>
        </Row>
        <Row>
          <Container className="p-4 text-justify">
            <div>
              <div className="mt-2 pt-2 pb-2 mb-4">
                <h3 className="pb-4 divider">
                  At Banyan Labs our mission is, first, <b>client value</b> and,
                  second, <b> associate growth</b>. We have education,
                  partnership, and mentoring programs in place which ensure that
                  our clients recevie world-class development work on their
                  projects while the men and women of Banyan Labs continue to
                  learn and reine their technical skills.
                </h3>
              </div>
              <div className="mt-2 pt-2 pb-2 mb-4">
                <h2 className="sectionHeader">
                  <b>CLIENT VALUE</b>
                </h2>
                <br />
                <h3 className="pb-4 divider">
                  Client value is our first priority as we provide quality
                  solutions to companies at competitive prices. Our partnership
                  with Naico, a richly talented IT services company, in
                  operation since 2005, provides senior level architects and
                  engineers to mentor and oversee all developer teams to ensure
                  quality and success on any job, large or small.
                </h3>
              </div>
              <div className="mt-2 pt-2 pb-2 mb-4">
                <h2 className="sectionHeader">
                  <b>ASSOCIATE GROWTH</b>
                </h2>
                <br />
                <h3 className="pb-4">
                  Associate growth is fundamental to our success. It’s what
                  differentiates us from the industry, and we’re dedicated to
                  our social impact mission. Above all, we are proud of the
                  passion, growth, and grit of our developers.
                </h3>
              </div>
            </div>
          </Container>
        </Row>
      </div>
    );
  }
}

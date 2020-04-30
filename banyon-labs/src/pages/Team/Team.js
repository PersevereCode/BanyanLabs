import React, { Component } from "react";
import { Row, Container } from "react-bootstrap";
import ContactForm from "../../components/Form";
import TeamMember from "../../components/TeamMember";
import { TEAMMEMBERS } from "./teamMembers";

export default class Team extends Component {
  render() {
    return (
      <div>
        <Row style={{ backgroundColor: "#24234d", color: "white" }}>
          <Container>
            <h1
              className="display-3 "
              style={{ fontFamily: "Acumin Variable Concept" }}
            >
              Team
            </h1>
          </Container>
        </Row>

        <Row className="mt-2" styele={{"max-height": "765px"}}>
          <TeamMember teamMembers={TEAMMEMBERS} />
        </Row>
        <Row style={{ backgroundColor: "#511135" }} className="mt-5">
          <Container className="text-center mb-4">
            <h1 className="display-5 p-2 mt-4 mb-4 border border-white">
              Get in Touch
            </h1>

          </Container>
        </Row>
      </div>
    );
  }
}

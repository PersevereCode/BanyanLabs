import React, { Component } from "react";
import { Row, Container } from "react-bootstrap";
import TeamMember from "../../components/TeamMember";
import { TEAMMEMBERS } from "./teamMembers";

export default class Team extends Component {
  
  render() {
    
    return (
      <div>
        <Row style={{ backgroundColor: "#24234d", color: "white",marginTop: "70px" }}>
          <Container className="mt-4 text-center">
            <h1
              className="display-3 text-justify text-center p-3"
            >
              Team
            </h1>
          </Container>
        </Row>

        <Row className="mt-2" styele={{"max-height": "765px"}}>
          <Container>
          <TeamMember teamMembers={TEAMMEMBERS} />            
          </Container>

        </Row>

      </div>
    );
  }
}

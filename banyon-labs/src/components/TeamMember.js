import React, { Component } from "react";
import TeamMemberExpanded from "./TeamMemberExpanded";
import { Card, Button, Row, Col, CardColumns } from "react-bootstrap";

export default class TeamMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMember: null,
    };
  }

  learnMore(member) {
    this.setState({ selectedMember: member });
  }

  render() {
    const members = this.props.teamMembers.map((member) => {
      return (
        <Card key={member.id} style={{ width: "15rem" }}>
          <Card.Img style={{width: "238px", height: "225px"}} variant="top" src={member.image} />
          <Card.Body>
            <Card.Title>{member.name}</Card.Title>
            <Card.Text>{member.title}</Card.Text>
            <Button
              onClick={() => {
                this.learnMore(member);
              }}
              variant="primary"
            >
              Learn More
            </Button>
          </Card.Body>
        </Card>
      );
    });

    const even = members.filter((i) => parseInt(i.key) % 2 === 0);
    const odd = members.filter((i) => parseInt(i.key) % 2 !== 0);
    console.log(members,even, odd);

    return (
      <div className="container">
        <Row >
          <Col lg={6} style={{maxHeight: "762px","overflow-y": "scroll"}}>
            <Row>
              <Col>{even}</Col>
              <Col>{odd}</Col>
            </Row>
            {/* {members} */}
          </Col>
          <Col lg={6}>
            <TeamMemberExpanded member={this.state.selectedMember} />
          </Col>
        </Row>
      </div>
    );
  }
}

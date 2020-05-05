import React, { Component } from "react";
import TeamMemberExpanded from "./TeamMemberExpanded";
import { Card, Button, Row, CardGroup, CardDeck, Col } from "react-bootstrap";

export default class TeamMember extends Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      selectedMember: null,
      show: false,
    };
  }

  learnMore(member) {
    this.setState({ selectedMember: member });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const members = this.props.teamMembers.map((member) => {
      return (
        <Col sm={12} md={6} lg={3}>
          <Card key={member.id} className="m-2">
            <Card.Img
              variant="top"
              src={member.image}
            />
            <Card.Body>
              <Card.Title>{member.name}</Card.Title>
              <Card.Text>{member.title}</Card.Text>
              <Button
              style={{backgroundColor: "#511135", border: "#511135"}}
                onClick={() => {
                  this.learnMore(member);
                  this.handleShow();
                }}
              
                block
              >
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      );
    });

    return (
      <div className="container">
        <Row className="mb-2">
          <CardDeck>{members}</CardDeck>

          <TeamMemberExpanded
            member={this.state.selectedMember}
            show={this.state.show}
            onClose={this.handleClose}
          />
        </Row>
      </div>
    );
  }
}

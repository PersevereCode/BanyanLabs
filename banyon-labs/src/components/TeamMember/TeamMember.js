import React, { Component } from "react";
import TeamMemberExpanded from "../TeamMemberExpanded";
import { Card, Button, Row, CardDeck, Col } from "react-bootstrap";

import './styles.css'

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
        <Col sm={12} md={12} lg={3}key={member.id}>
          <Card  className="m-2">
            <Card.Body style={{border: "#24234d solid 3px"}}>
              <Card.Img variant="top" src={member.image} className='cardImage' />
              <Card.Title style={{textDecoration: "underline", textDecorationColor: "#494d83",fontSize: "1.35em"}}>{member.name}</Card.Title>
              <Card.Subtitle>
                <b>{member.title}</b>
              </Card.Subtitle>
              <br />
              <Button
                style={{ backgroundColor: "#24234d", border: "#24234d",}}
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

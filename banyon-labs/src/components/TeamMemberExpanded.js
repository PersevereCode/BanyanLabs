import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class TeamMemberExpanded extends Component {
  render() {
    const moreDetail = (member) => {
      if (member !== null) {
        return (
          <Card  key={member.id}>
            <Card.Img variant="top" src={member.image} />
            <Card.Body>
              <Card.Title>{member.name}</Card.Title>
              <Card.Title>{member.title}</Card.Title>
              <Card.Text>{member.bio}</Card.Text>
            </Card.Body>
          </Card>
        );
      } else {
        return <div></div>;
      }
    };
    return <div>{moreDetail(this.props.member)}</div>;
  }
}

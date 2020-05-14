import React from "react";
import { Image, Modal, Card } from "react-bootstrap";

export default function TeamMemberExpanded(props) {
  if (props.member !== null) {
    return (
      <>
        <Modal show={props.show} onHide={props.onClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.member.name} - {props.member.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{whiteSpace: "pre-line", textAlign: "justify"}}>
            <Image src={props.member.image} fluid rounded/>
           {props.member.bio}
          </Modal.Body>
        </Modal>
      </>
    );
  } else {
    return <></>;
  }
}

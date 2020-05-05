import React from "react";
import { Image, Modal } from "react-bootstrap";

export default function TeamMemberExpanded(props) {
  if (props.member !== null) {
    return (
      <>
        <Modal show={props.show} onHide={props.onClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.member.name} - {props.member.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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

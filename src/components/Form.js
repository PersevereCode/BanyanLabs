import SlackInt from "./tutorial"
import React, { useState } from "react";
import {Form, Button, Col} from "react-bootstrap";
import * as emailjs from 'emailjs-com'
const axios = require('axios');
const ContactForm = (props) => {
const [ state, setState ] = useState({email: "", name: "", phone: "", message: ""})
const onSubmit = (event) => {
      event.preventDefault();
        // SlackInt(state)
        let templateParams = {
          from_email: state.email,
          to_name: '<contact@banyanlabs.io>',
          from_name: state.name,
          number: state.phone,
          message_html: state.message,
         }
         emailjs.send(
          'gmail',
          'banyantest',
           templateParams,
          'user_4my3il3TVE5QvTZ2QqykP'
         )
        setState({email: "", name: "", phone: "", message: ""})
  };
  return (
    <div id="contact_us" className="outterMainDiv w-100">
      <div className="p-4 innerMainDiv col-9">
        <div className="row justify-content-center">
          <h2 className="row justify-content-center mt-3 ml-5 mr-5 mb-5 p-3 getInTouch">Get in Touch</h2>
        </div>       
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formGridName">
          <Form.Label className="text-white">Name:</Form.Label>
          <Form.Control placeholder="Enter Name" value={state.name} onChange={(e) => setState({
            ...state,
            name: e.target.value
          })} required />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="text-white">Email:</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={state.email} onChange={(e) => setState({
              ...state,
              email: e.target.value
            })} required />
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="formGridPhone">
          <Form.Label className="text-white">Phone:</Form.Label>
          <Form.Control placeholder="Enter Phone Number" value={state.phone} onChange={(e) => setState({
            ...state,
            phone: e.target.value
          })} />
        </Form.Group>
        <Form.Row>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="text-white">Additional message:</Form.Label>
            <Form.Control className="w-100" cols="140" as="textarea" rows="5" placeholder="Add a brief message" value={state.message} onChange={(e) => setState({
              ...state,
              message: e.target.value
            })} />
          </Form.Group>
        </Form.Row>
        <Button className="submit_color lead" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    </div>
  );
};
export default ContactForm
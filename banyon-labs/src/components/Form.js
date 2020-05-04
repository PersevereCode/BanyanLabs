import React, { useState } from "react";
import {Form, Button, Col} from "react-bootstrap";
const axios = require('axios');


const ContactForm = (props) => {
const [ state, setState ] = useState({email: "", name: "", platform: ""})
const onSubmit = (event) => {
      event.preventDefault();
    axios
      .post(
        "https://https://getform.io/thank-you",
        state,
        { headers: { Accept: "application/json" } }
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };



  return (
    <div id="contact_us" className="outterMainDiv w-100">
      <div className="p-4 innerMainDiv col-9">
        <div className="row justify-content-center">
          <h2 className="row justify-content-center mt-3 ml-5 mr-5 mb-5 p-3 getInTouch border border-white">Get in Touch</h2>
        </div>       

      <Form onSubmit={onSubmit} action="https://getform.io/f/9ded9583-4090-4627-b4e4-dc8228494fd7" encType="multipart/form-data" method="POST">
        <Form.Group controlId="formGridName">
          <Form.Label className="text-white">Name:</Form.Label>
          <Form.Control placeholder="Enter Name" onChange={(e) => setState({
            ...state,
            name: e.target.value
          })} required />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="text-white">Email:</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setState({
              ...state,
              email: e.target.value
            })} required />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridPhone">
          <Form.Label className="text-white">Phone:</Form.Label>
          <Form.Control placeholder="Enter Phone Number" onChange={(e) => setState({
            ...state,
            phone: e.target.value
          })} />
        </Form.Group>

        <Form.Row>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="text-white">Additional message:</Form.Label>
            <Form.Control className="w-100" cols="140" as="textarea" rows="5" placeholder="Add a brief message" onChange={(e) => setState({
              ...state,
              message: e.target.value
            })} />
          </Form.Group>
        </Form.Row>

        <Button className="submit_color" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    </div>
  );
};


export default ContactForm

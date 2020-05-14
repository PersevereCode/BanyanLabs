import React from "react";
import {Form, Button, Col, Container, Row} from "react-bootstrap";

import './ContactForm.css';
const axios = require('axios');

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", name: "", platform: "" };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post(
        "https://https://getform.io/thank-you",
        this.state,
        { headers: { Accept: "application/json" } }
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

render(){
  return (
    <Container>
      <Row>
        <Col sm={12}>
        <h1>Contact Me</h1>
        </Col>
        </Row>
    
    <Form action="https://getform.io/f/9ded9583-4090-4627-b4e4-dc8228494fd7" encType="multipart/form-data" method="POST">
      <Form.Row>
      <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Name</Form.Label>
        <Form.Control name="text" type="name" placeholder="Mike Jones" />
      </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="you@gmail.com" name="email" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Phone</Form.Label>
        <Form.Control name="tel" type="tel" placeholder="6307890384" />
      </Form.Group>
      </Form.Row>
      <Form.Row>


      <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows="9" name="msg" />
  </Form.Group>
      </Form.Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
  </Form>
  </Container>
 )}

    // {/* <input type="file" name="file" /> */}
    // {/* <input type="text" name="name" /> */}
    // {/* <input type="email" name="email" /> */}
    // {/* <input type="tel" name="tel" /> */}
    // {/* <textarea type="text" name="msg" /> */}
    // {/* <button type="submit">Send</button> */}

 





    // <Form>
    //   <Form.Row>
    //     <Form.Group as={Col} controlId="formGridEmail">
    //       <Form.Label>Email</Form.Label>
    //       <Form.Control type="email" placeholder="Enter email" />
    //     </Form.Group>

    //     <Form.Group as={Col} controlId="formGridPassword">
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control type="password" placeholder="Password" />
    //     </Form.Group>
    //   </Form.Row>

    //   <Form.Group controlId="formGridAddress1">
    //     <Form.Label>Address</Form.Label>
    //     <Form.Control placeholder="1234 Main St" />
    //   </Form.Group>

    //   <Form.Group controlId="formGridAddress2">
    //     <Form.Label>Address 2</Form.Label>
    //     <Form.Control placeholder="Apartment, studio, or floor" />
    //   </Form.Group>

    //   <Form.Row>
    //     <Form.Group as={Col} controlId="formGridCity">
    //       <Form.Label>City</Form.Label>
    //       <Form.Control />
    //     </Form.Group>

    //     <Form.Group as={Col} controlId="formGridState">
    //       <Form.Label>State</Form.Label>
    //       <Form.Control as="select">
    //         <option>Choose...</option>
    //         <option>...</option>
    //       </Form.Control>
    //     </Form.Group>

    //     <Form.Group as={Col} controlId="formGridZip">
    //       <Form.Label>Zip</Form.Label>
    //       <Form.Control />
    //     </Form.Group>
    //   </Form.Row>

    //   <Form.Group id="formGridCheckbox">
    //     <Form.Check type="checkbox" label="Check me out" />
    //   </Form.Group>

    //   <Button variant="primary" type="submit">
    //     Submit
    //   </Button>
    // </Form>

};

export default ContactForm;
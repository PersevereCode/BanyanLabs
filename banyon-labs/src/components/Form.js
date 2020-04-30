import React from "react";
import {Form, Button, Col} from "react-bootstrap";
import Map from '../components/Map';


const ContactForm = (props) => {
  // const style = {
  //   width: '150px',
  //   height: '150px'
  // }
  return (
    <div className="outterMainDiv w-100">
      <div className="p-4 innerMainDiv col-9">
        <div className="row justify-content-center">
          <h2 className="row justify-content-center mt-3 ml-5 mr-5 mb-5 p-3 getInTouch border border-white">Get in Touch</h2>
        </div>
        <div className="row justify-content-center align-items-center border border-white p-3 mb-3 contact_info_div">
          
          <div className="col-lg-5 col-md-12">
            <h2 className="text-light contact_attributes">4147 Willow Lake Blvd. Memphis, TN 38118</h2>
            <h2 className="text-light contact_attributes">contact@banyanlabs.io</h2>
            <h2 className="text-light contact_attributes">Phone # (877) 260-7299</h2>
          </div>
          <div  className="col-lg-5 col-md-12">
            <Map className="dd"/>
          </div>

        </div>

        

      <Form>
        <Form.Group controlId="formGridName">
          <Form.Label className="text-white">Name:</Form.Label>
          <Form.Control placeholder="Enter Name" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="text-white">Email:</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridPhone">
          <Form.Label className="text-white">Phone:</Form.Label>
          <Form.Control placeholder="Enter Phone Number" />
        </Form.Group>

        <Form.Row>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="text-white">Additional message:</Form.Label>
            <Form.Control className="w-100" cols="140" as="textarea" rows="5" placeholder="Add a brief message" />
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

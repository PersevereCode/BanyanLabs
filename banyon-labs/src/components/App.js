import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import { Container, Row, Col } from "react-bootstrap";
function App() {
  return (
    <Container className="App">
      <Row>
        {/* <header className="App-header">
          <p className="display-4">test</p>
        </header> */}
      </Row>
      <Row>
        <Col>
          <div>
            <ContactForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default class Partners extends Component {
  render() {
    return (
      <div
        style={{
          color: "white",
        }}
      >
        <Row style={{ backgroundColor: "#24234d" }}>
          <Container className="pt-4 pb-4 text-center">
            <h1
              className="display-3 p-3"
            >
              Partners
            </h1>
          </Container>
        </Row>
        <Row>
          <Container
            className="pt-4 pb-4 "
            style={{ color: "black" }}
          >
            <Row>
              <Col lg={3}>
                <Image src="./Pictures/naico-logo.jpg" fluid />
              </Col>
              <Col lg={9}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  luctus tellus sed risus rhoncus, cursus ornare enim fringilla.
                  Cras imperdiet gravida velit, quis porttitor mi volutpat nec.
                  Phasellus tincidunt, nisi egestas scelerisque blandit, augue
                  tortor pulvinar nibh, sed vestibulum eros justo sed augue.
                  Etiam convallis libero quam, a porta nisl mattis eu. In hac
                  habitasse platea dictumst. Morbi pretium felis a blandit
                  dignissim. Mauris pharetra, purus in pulvinar tempor, nisl
                  tortor vulputate erat, eget molestie lectus eros id ex. Cras
                  in libero venenatis, aliquam lorem eget, congue metus. Sed eu
                  luctus quam, non auctor nisi. Nunc sed mi tellus. Suspendisse
                  vel tincidunt enim, a commodo tortor. Phasellus ultricies mi
                  id nulla mattis placerat. Curabitur ut ligula turpis. Donec
                  convallis tortor ut neque porta, quis elementum mi volutpat.
                  Vestibulum vitae massa libero. Donec eget est sed mauris
                  pharetra euismod a id nulla. Duis nec iaculis nunc. Nam dictum
                  semper orci, ut varius neque consequat a. Fusce ac suscipit
                  elit. Nunc placerat rutrum massa, vitae sagittis urna egestas
                  vitae. Morbi dolor nulla, pharetra ac turpis quis,
                  pellentesque tempor enim. In ipsum massa, hendrerit eget
                  scelerisque lacinia, blandit eget ipsum. Integer egestas eros
                  et mattis scelerisque.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={3}>
                <Image src="./Pictures/persevere-logo.svg" fluid />
              </Col>
              <Col lg={9}>
                <p>
                  Duis nec iaculis nunc. Nam dictum semper orci, ut varius neque
                  consequat a. Fusce ac suscipit elit. Nunc placerat rutrum
                  massa, vitae sagittis urna egestas vitae. Morbi dolor nulla,
                  pharetra ac turpis quis, pellentesque tempor enim. In ipsum
                  massa, hendrerit eget scelerisque lacinia, blandit eget ipsum.
                  Integer egestas eros et mattis scelerisque. Nulla ultrices
                  urna elit, sit amet consequat nisl porta id. Curabitur blandit
                  magna nec arcu blandit, at eleifend nunc sollicitudin. Nullam
                  vulputate quam est, sit amet sagittis turpis vestibulum ac.
                  Fusce eleifend nisl ac lectus eleifend sollicitudin. Nullam et
                  venenatis ligula. Sed fringilla vestibulum quam, sed facilisis
                  justo. Ut sem lorem, pharetra sed sapien id, sollicitudin
                  dictum orci. Integer fermentum velit non quam placerat, nec
                  tincidunt libero consectetur. Nunc lacus sapien, egestas sed
                  tellus at, laoreet pharetra est. Mauris ultrices interdum erat
                  vel tincidunt.
                </p>
              </Col>
            </Row>
          </Container>
        </Row>
      </div>
    );
  }
}

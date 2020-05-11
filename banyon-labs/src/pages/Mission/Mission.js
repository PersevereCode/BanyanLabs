import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import "./Mission.css";

export default class Mission extends Component {
  render() {
    const colors = {
      main: "#24234d",
      primary: "#1b723f",
      secondary: "#511135",
      accent: "#494d83",
    };
    return (
      // <div
      //   style={{
      //     color: "white",
      //   }}
      // >
      //   <Row style={{ backgroundColor: "#24234d" }}>
      //     <Container className="pt-4 pb-4 text-center">
      //       <h1
      //         className="display-3"
      //       >
      //         Mission
      //       </h1>
      //       <p className="lead text-justify p-2">
      //         At Banyan Labs our mission is, first, <b style={{color: "#1b723f"}}><u>client value</u></b> and, second, <b style={{color: "#1b723f"}}><u>associate growth</u></b>.
      <div className="main">
        <Row className='header'>
          <Container className="p-4 text-center">
            <h1 className="display-3">Mission</h1>
            <p>
              At Banyan Labs our mission is, first,{" "}
              <b>
                <u>client value</u>
              </b>{" "}
              and, second,{" "}
              <b>
                <u>associate growth</u>
              </b>
              .
              <br />
              We have education, partnership, and mentoring programs in place
              which ensure that our clients recevie world-class development work
              on their projects while the men and women of Banyan Labs continue
              to learn and reine their technical skills.
            </p>
          </Container>
        </Row>
        <Row>
          <Container className="p-4 pb-4 text-center">
            <div>
              <div className="mt-2 pt-2 pb-2 mb-4">
                <h2 className="sectionHeader">
                  <b>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </b>
                </h2>
                <br />
                <p className="pb-4 divider lead text-justify">
                  Mauris ante sem, mollis eget ligula at, vehicula ultrices
                  mauris. Aliquam in condimentum erat. Sed viverra lacus quis
                  efficitur convallis. Maecenas pellentesque lacus nec nunc
                  pulvinar, non posuere velit mattis. Phasellus purus mi,
                  feugiat quis purus sit amet, consectetur venenatis mi. Fusce
                  id erat nibh. Phasellus vitae massa sed diam dapibus volutpat
                  vel sit amet tellus. Orci varius natoque penatibus et magnis
                  dis parturient montes, nascetur ridiculus mus. Cras faucibus
                  sed eros a tincidunt. Morbi sagittis sem lectus, at facilisis
                  augue finibus a.
                </p>
              </div>
              <div className="mt-2 pt-2 pb-2 mb-4">
                <h2 className="sectionHeader">
                  <b>
                    Maecenas scelerisque vehicula tellus laoreet malesuada
                    aenean.
                  </b>
                </h2>
                <br />
                <p className="pb-4 divider lead text-justify">
                  Vitae facilisis. Curabitur vitae ornare quam. Sed ultrices
                  lacus sit amet orci molestie, quis faucibus arcu tempor.
                  Phasellus et nulla diam. Donec augue nisl, pellentesque ac
                  eleifend nec, tincidunt sit amet libero. Proin ut aliquam ex,
                  eu ultrices nunc. Curabitur urna dui, lacinia in quam non,
                  fringilla interdum felis. Nunc sit amet orci vitae nisi
                  sollicitudin tempor ut vitae ipsum. Nulla luctus lorem quis
                  augue blandit, at interdum nibh aliquam. Vestibulum ante ipsum
                  primis in faucibus orci luctus et ultrices posuere cubilia
                  curae; Integer semper tortor magna, at tincidunt libero
                  dignissim eget.
                </p>
              </div>
              <div className="mt-2 pt-2 pb-2 mb-4">
                <h2 className="sectionHeader">
                  <b>Nunc tempus finibus cursus. Nulla faucibus.</b>
                </h2>
                <br />
                <p className="lead text-justify">
                  Convallis leo non elementum in ut enim sed quam dignissim
                  ultrices non nec nisi. Quisque dapibus cursus mauris, non
                  pharetra sem suscipit nec. Cras in ornare ante. Cras neque
                  arcu, bibendum atincidunt ac, vehicula vitae lectus. Mauris
                  viverra nec est eget dapibus. Proin sed maximus mauris, sit
                  amet ultrices mi. Ut sagittis dui a arcu volutpat feugiat.
                  Mauris luctus erat urna, vitae volutpat dui luctus eu.
                </p>
              </div>
            </div>
          </Container>
        </Row>
      </div>
    );
  }
}

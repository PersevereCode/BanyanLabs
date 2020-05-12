import React from "react";
import { Fade } from "react-reveal";
import SS1 from "../styles/images/ss.webp";
import PLogo from "../styles/images/persLogo.png";
import NLogo from "../styles/images/naico.jpg";
import { Link } from "react-router-dom";
import { Image, Col } from "react-bootstrap";

export default function WhoWeAre() {
  return (
    <div className="row justify-content-center mt-3 p-5">
      <div className="text-center">
        <h3 className="display-4">Who We Are</h3>
      </div>

      <h3 className="text-center col-12 mt-3">
        <Link className="no-dec" to="/about_us">
          About Us
        </Link>
      </h3>

      <div>
        <Link className="no-dec" to="/mission">
          <h3>Mission</h3>
        </Link>
        <h4>Client Value</h4>
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          voluptates porro non alias? Quidem, repellendus. Iure odit officiis
          quas. Earum voluptatibus suscipit deserunt illum totam fugiat
          asperiores officia laborum qui! Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Voluptate natus temporibus ipsum,
          eveniet magni nobis nesciunt laboriosam ex corporis, rem maxime ullam
          aliquam ipsam beatae debitis, voluptates consequuntur dolores non.
        </p>
        <h4>Associate Opportunity</h4>
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          voluptates porro non alias? Quidem, repellendus. Iure odit officiis
          quas. Earum voluptatibus suscipit deserunt illum totam fugiat
          asperiores officia laborum qui! Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Voluptate natus temporibus ipsum,
          eveniet magni nobis nesciunt laboriosam ex corporis, rem maxime ullam
          aliquam ipsam beatae debitis, voluptates consequuntur dolores non.
        </p>
      </div>

      <div className="mt-2">
        <Fade right>
          <Link className="no-dec" to="/team">
            <h3 className="text-center">Team</h3>
          </Link>

          <div className="row justify-content-between">
            <Image
              src="./Pictures/banyanGroup.jpg"
              alt="Banyan Labs Team"
              fluid
            />
          </div>
        </Fade>
      </div>
      <div className="col-12 text-center mt-3">
        <Link className="no-dec" to="/partners">
          <h3>Partners</h3>
        </Link>
        <div className="row justify-content-around">
          <img
            src={PLogo}
            className="mt-4"
            style={{ minWidth: "300px", height: "110px", maxWidth: "500px" }}
          />
          <img src={NLogo} alt="" />
        </div>
      </div>
    </div>
  );
}

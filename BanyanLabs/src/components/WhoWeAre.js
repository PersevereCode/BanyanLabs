import React from "react";
import { Fade } from "react-reveal";
import SS1 from "../styles/images/ss.webp";
import PLogo from "../styles/images/persLogo.png";
import NLogo from "../styles/images/naico.jpg";
import { Link } from "react-router-dom";
// import Team from "../styles/images/team.jpg";
import { Figure } from "react-bootstrap";
import BanyanPic from "../styles/images/banyanGroup.jpg";

export default function WhoWeAre() {
  return (
    <div>
      <div className="row justify-content-center p-5">
        <div className="text-center col-12">
          <Link className="no-dec " to="/about_us">
            <h3 className="display-4 prim-txt">Who We Are</h3>
          </Link>
        </div>

        {/* <h3 className="text-center col-12 mt-3"><Link className="no-dec" to="/about_us">About Us</Link></h3>    */}

        <div style={{maxWidth: "1200px"}}>
          <Link className="no-dec" to="/about_us">
            <h3 className="header-size-2 pt-3 sec-txt">About</h3>
          </Link>
          <p className="text-justify lead">
            We are a collection of people dedicated to delivering the highest
            quality service to our customers while impacting social change.
            Everything at Banyan Labs begins and ends with technology: We
            provide the best in end-to-end product development, quality
            assurance, and engineering solutions to help our customers reach
            their development and business goals. But we’re more than what we do
            for the market, we measure ourselves by what we do for PEOPLE. Our
            vision is to empower justice-involved men and women to succeed in
            software development careers by providing service, experience, and
            opportunities at every turn.
          </p>
          <Link className="no-dec" to="/mission">
            <h3 className="header-size-2 sec-txt">Mission</h3>
          </Link>
          <p className="text-justify lead">Client value. Associate growth.</p>
        </div>
        <div>
          <Link className="no-dec" to="/team">
            <h3 className="text-center display-4 prim-txt">Team</h3>
          </Link>
          <Figure style={{maxWidth: '1200px'}}>
            <Figure.Image
              height={350}
              maxWidth={750}
              src={BanyanPic}
            />
            <Figure.Caption>
              “The strength of the team is each individual member. The strength
              of each member is the team.” — Phil Jackson
            </Figure.Caption>
          </Figure>
        </div>
        <div className="col-12 text-center mt-3">
          <Link className="no-dec" to="/partners">
            <h3 className="display-4 prim-txt mb-3">Partners</h3>
          </Link>
          <Figure>
            <Figure.Image
              minWidth={300}
              height={110}
              maxWidth={500}
              src={PLogo}
            />
            <Figure.Caption style={{ maxWidth: "1200px" }} className="fig-cap">
              Persevere is a national non-profit organization who shares our
              mission to empower justice-involved men and women to succeed as
              productive members of society. By helping them develop the skills
              they need to be employable within the technology industry, and
              helping them find jobs in the field, they are changing lives
              through education, mentoring, and ongoing support. Persevere
              provides a coding education program that teaches inmates and
              parolees how to code. Banyan Labs hires these full-stack developer
              graduates and teaches them how to succeed on teams.
            </Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image src={NLogo} />
            <Figure.Caption className="fig-cap">
              Naico is a premier IT solutions partner which provides depth,
              breadth, and mentorship to our Banyan Labs team.
            </Figure.Caption>
          </Figure>
        </div>
      </div>
    </div>
  );
}

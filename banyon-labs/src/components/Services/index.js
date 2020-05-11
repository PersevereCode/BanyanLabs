import React from "react";
import { Container, Row } from 'react-bootstrap'
import "./style.css";

function Service(props) {
  return (
<div>
  <Row style={{ backgroundColor: "#24234d" }}>
    <Container className="pt-4 pb-4 text-center text-light">
      <h1
        className="display-3"
        style={{ "font-family": "Acumin Variable Concept" }}
      >
        {props.title}
      </h1>
    </Container>
  </Row>

  <div id="features" className="d-flex flex-column justify-content-center align-items-center">
  {
    props.diagram && 
      <div className="row justify-content-center mb-3">
        <img src={props.diagram} alt="img" className="px-5 col-md-9 col-sm-12 mx-auto max-hw" />
      </div>
  }
  {/* <div className="col-md-9 col-sm-12 row justify-content-center mt-3">
    <img id="appraisal-image" className="img-fluid rounded mb-3 mb-md-0" src={props.img} alt='img' />
  </div> */}
  <div className="col-md-9 col-sm-12 row justify-content-center mt-3">
    <h3>{props.h1}</h3>
    {/* <p>{props.p1}</p> */}
        <br />
    <h3 className="mt-3">{props.h2}</h3>
    {/* <p>{props.p2}</p> */} 
    </div>
    {
      props.ul &&
      <div className="mt-3">
        <ul>
          <li>
            <h4>
              Who are our personas?
            </h4>
          </li>
          <li>
            <h4>
              What are their pain points, wants, and needs?
            </h4>
          </li>
          <li>
            <h4>
              What problems are we trying to solve for them?
            </h4>
          </li>
          <li>
            <h4>
              What value are we providing?
            </h4>
          </li>
          <li>
            <h4>
              What user experience flows are we implementing?
            </h4>
          </li>
        </ul>
      </div>
    }
    <div className="col-md-9 col-sm-12 row justify-content-center mt-3">
      <h3>{props.h3}</h3>
    </div>
  </div>

  <br />
  {/* {
    props.diagram && 
      <div className="row justify-content-center mt-3">
        <img src={props.diagram} alt="img" className="px-5 col-md-9 col-sm-12 mx-auto max-hw" />
      </div>
  } */}
  {/* <h2 id="page-header"><strong>We Also Offer:</strong></h2> */}
  {/* <div id="features" className="row">
    <div className="col-sm-6">
      <ul>
        <li>Ad Valorem Tax Appraisals (Tax Appeal)</li>
        <li>Eminent Domain Appraisals (IDOT Approved)</li>
        <li> Insurance/Property Loss Appraisals</li>
        <li>Property Litigation Appraisals</li>
        <li>Estate Planning/Settlement Appraisals</li>
        <li>Feasibility Analysis</li>
      </ul></div>
    <div className="col-sm-6">
      <li>Relocation Appraisals	</li>
      <li>Pre-Improvement vs. Post-Improvement Appraisals (Rehab, Remodeling, or Restoration)</li>
      <li>FHA Appraisals</li>
      <li>Highest and Best Use Analysis</li>
      <li>Market Analysis</li>
      <li>Investment Analysis</li>
      <li>Mortgage/Foreclosure/REO/Reverse Mortgage Appraisals</li>
    </div>
  </div> */}
  <hr />

  <hr />

  
</div>


 
  );
}
export default Service;
import React from "react";
// import "./style.css";

function Service(props) {
  return (
    

<div className="container">
 
  <h1 id="page-header" className="mt-4 mb-3">{props.title}
  </h1>
  {/* <ol id="breadcrumb" className="breadcrumb bg-dark">
    <li className="breadcrumb-item">
      <a
      href="/">Home</a>
    </li>
    <li className="breadcrumb-item active">{props.title}</li>
  </ol> */}

  <div id="features" className="row">

    <div className="col-md-5">
  <h3>{props.h1}</h3>
  {/* <p>{props.p1}</p> */}

        <br />

      <h3>{props.h2}</h3>
  {/* <p>{props.p2}</p> */}
     
    </div>


    <div className="col-md-7">

<img id="appraisal-image" className="img-fluid rounded mb-3 mb-md-0" src={props.img} alt='img' />

</div>
  </div>

  <br />
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
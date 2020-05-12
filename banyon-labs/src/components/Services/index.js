import React from "react";
import { Container, Row, Table} from 'react-bootstrap'
import "./style.css";
import CheckIcon from '@material-ui/icons/Check';

function Service(props) {
  return (
<div>
  <Row style={{ backgroundColor: "#24234d" }}>
    <Container className="pt-4 pb-4 lead text-center text-light">
      <h1
        className="display-3"
      >
        {props.title}
      </h1>
    </Container>
  </Row>

  <div id="features" className="d-flex flex-column justify-content-center align-items-center">
  {
    props.diagram && 
      <div className="row justify-content-center mt-4 mb-3">
        <img src={props.diagram} alt="img" className="px-5 col-md-9 col-sm-12 mx-auto max-hw" />
      </div>
  }
  {
    props.mobile &&
        <Table style={{width: '50vw'}} className='mt-4' borderless>
          <tbody>
            <tr>
              <td>
                <h4>iOS?</h4>
              </td>
              <td>
                <CheckIcon className="ml-3" style={{fontSize: '28'}} />
              </td>
            </tr>
            <tr>
              <td>
                <h4>Android?</h4>
              </td>
              <td>
              <CheckIcon className="ml-3" style={{fontSize: '28'}} />
              </td>
            </tr>
            <tr>
              <td>
                <h4>Cross-platform solutions?</h4>
              </td>
              <td>
              <CheckIcon className="ml-3" style={{fontSize: '28'}} />
              </td>
            </tr>
            <tr>
              <td colSpan="2" className='text-center'><h3>Yeah, we can do that</h3></td>
            </tr>
          </tbody>
        </Table>
  }
  {/* <div className="col-md-9 col-sm-12 row justify-content-center mt-3">
    <img id="appraisal-image" className="img-fluid rounded mb-3 mb-md-0" src={props.img} alt='img' />
  </div> */}
  <div className="col-md-9 col-sm-12 row justify-content-center mt-3">
    <p className="mt-3 lead text-justify">{props.h1}</p>
    {/* <p>{props.p1}</p> */}
        <br />
    <p className="mt-3 lead text-justify">{props.h2}</p>
    {/* <p>{props.p2}</p> */} 
    </div>
    {
      props.ul &&
      <div className="mt-3">
        <ul>
          <li>
            <h4 className="lead">
              Who are our personas?
            </h4>
          </li>
          <li>
            <h4 className="lead">
              What are their pain points, wants, and needs?
            </h4>
          </li>
          <li>
            <h4 className="lead">
              What problems are we trying to solve for them?
            </h4>
          </li>
          <li>
            <h4 className="lead">
              What value are we providing?
            </h4>
          </li>
          <li>
            <h4 className="lead">
              What user experience flows are we implementing?
            </h4>
          </li>
        </ul> 
      </div>
    }
    {
    props.diagram2 && 
      <div className="row justify-content-center mb-3">
        <img src={props.diagram2} alt="img" className="px-5 col-md-9 col-sm-12 mx-auto max-hw" />
      </div>
  }
    <div className="col-md-9 col-sm-12 row justify-content-center mt-3">
      <h3 className="mt-3 lead text-justify">{props.h3}</h3>
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
  {/* <hr />

  <hr /> */}

  
</div>


 
  );
}
export default Service;
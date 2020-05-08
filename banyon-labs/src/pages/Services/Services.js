import React, { Component } from "react";
// import Footer from "../components/Footer";
import Service from "../../components/Services";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";
// import Card from "../../components/Card";
// import Jumbotron from "react-bootstrap/Jumbotron";
import "./serve.css";
import Diagram from '../../styles/images/ourprocess.png'

class Services extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    // console.log(this.props.match.url[10]);
    const page = this.props.match.url[10];
    switch (page) {
      case "1":
        return (
          <div className="mar-t">
            <Service
              img="https://wishdesk.com/sites/default/files/inline-images/Traditional%20Web%20Development%20Process.jpg"
              title="Our Process"
              h1="When we engage with clients we want to make sure that communication is paramount, that committments are kept, and that projects meeting expectations are delivered on time and on budget."
              h2="This is a diagram of the process which we will follow with you as our client:"
              diagram={Diagram}
            />
            <br />
          </div>
        );
      case "2":
        return (
          <div className="mar-t">
            <Service
              img="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/121002887/original/9f2174ec1236e128859a8ad2ff98a5a21a0230b7/sdwdwdwwqwfhijwwfwefh-eif-wehfiwehf-i-hwei.jpg"
              title="Web Applications"
              h1=""
              h2=""
            />
          
            <br />
          </div>
        );
      case "3":
        return (
          <div className="mar-t">
            <Service
              img="https://www.ipraxa.com/blog/wp-content/uploads/2018/09/mobile-app-development-technologies.png"
              title="Mobile Applications"
              h1=""
              h2=""
            />
           
            <br />
          </div>
        );
      case "4":
        return (
          <div className="mar-t">
            <Service
              img="https://i0.wp.com/opensourceforu.com/wp-content/uploads/2019/04/Testing-mobile-and-apps.jpg?fit=900%2C535&ssl=1"
              title="Testing Services"
              h1=""
              h2=""
            />
         
            <br />
          </div>
        );
      default:
        return (
          <div className="mar-t">
            <Service
              img="https://www.insidehighered.com/sites/default/server_files/styles/large/public/media/barber%20handshake.jpg?itok=KNWntI29"
              title="Appraisal and Valuation Services"
              h1="Real Estate Appraisals"
              h2="What Is a Reconciliation Report?"
              p1="Ameri-Mark, Inc. is a full-service real estate appraisal company. We have the ability to perform a variety of
      appraisal reports, including forensic appraisal reviews and reconciliation reports for use in portfolio
      monitoring, loan modifications, work-outs, quality control, etc."
              p2="When two or more appraisals are completed on the same property, a reconciliation report can be completed,
      which is a forensic review of all appraisals in question. A reconciliation report is then completed that
      identifies the most credible and reliable appraisal report. This is many times a better alternative than
      ordering a third or fourth appraisal."
            />
          </div>
        );
    }
  }
}
export default Services;

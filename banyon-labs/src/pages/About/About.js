import React, { Component } from "react";
import ContactForm from "../../components/Form";
import { Container, Row} from "react-bootstrap";
import BackgroundImage from "../../styles/images/aboutBackground1.jpg"
import Divider from '@material-ui/core/Divider';
export default class About extends Component {
  render() {
    return (
      <div
        style={{
          color: "white",
          "font-family": "bc-alphapipe, sans-serif",
          fontSize: "22px",
        }}
      >
        <Row
        // style= // {{ backgroundColor: "#24234d" }}
        >
          {" "}
          {/*Might be better to have a bacgrkound image instead of the color*/}
            <Container className=" pt-4 pb-4 text-left" 
            style= {{backgroundImage: `url(${BackgroundImage})`, height:"400px", width:"60vw"}}
            >

              <h1
                className="display-3 pl-3"
                style={{ "font-family": "Acumin Variable Concept", color:"#1b723f"}}
              >
                About Us
              </h1>
            </Container>
          
        </Row>
        <Row>
          {/*Adding in some more text to see how things space out. Once we recevie the final text may need to be restyled.*/}
          <Container
            className="py-4 px-5 text-center"
            style={{ color: "black", width:"60vw" }}
          >
            <Container className="py-4 px-4 mb-5 text-center bg-light">
              <p>
                Banyan Labs is U.S. based, international for-profit development
                company created to provide high quality IT services while also
                making a positive contribution to the effort to reduce recidivsm
                and empower justice involved indiviuals to succeed in well-paying
                jobs in the tech industry.
                <br />
                Co-located with Persevere, Banyan Labs employs Persevere
                participants who have completed their training to work as junior
                developers. providing them with supervision, mentoring, support
                and valuable experience to launch their careers as developers.
              </p>
          </Container>
          <Divider style={{height:"2px"}} />
          <Container className="py-4 px-5 mt-5 text-center bg-light">
            <p className="py-4 px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ante sem, mollis eget ligula at, vehicula ultrices mauris. Aliquam
              in condimentum erat. Sed viverra lacus quis efficitur convallis.
              Maecenas pellentesque lacus nec nunc pulvinar, non posuere velit
              mattis. Phasellus purus mi, feugiat quis purus sit amet,
              consectetur venenatis mi. Fusce id erat nibh. Phasellus vitae
              massa sed diam dapibus volutpat vel sit amet tellus. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Cras faucibus sed eros a tincidunt. Morbi sagittis
              sem lectus, at facilisis augue finibus a. Maecenas scelerisque
              vehicula tellus laoreet malesuada aenean . vitae facilisis.
              Curabitur vitae ornare quam. Sed ultrices lacus sit amet orci
              molestie, quis faucibus arcu tempor. Phasellus et nulla diam.
              Donec augue nisl, pellentesque ac eleifend nec, tincidunt sit amet
              libero. Proin ut aliquam ex, eu ultrices nunc. Curabitur urna dui,
              lacinia in quam non, fringilla interdum felis. Nunc sit amet orci
              vitae nisi sollicitudin tempor ut vitae ipsum. Nulla luctus lorem
              quis augue blandit, at interdum nibh aliquam. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae; Integer semper tortor magna, at tincidunt libero dignissim
              eget. Nunc tempus finibus cursus. Nulla faucibus convallis leo non
              elementum. In ut enim sed quam dignissim ultrices non nec nisi.
              Quisque dapibus cursus mauris, non pharetra sem suscipit nec. Cras
              in ornare ante. Cras neque arcu, bibendum atincidunt ac, vehicula
              vitae lectus. Mauris viverra nec est eget dapibus. Proin sed
              maximus mauris, sit amet ultrices mi. Ut sagittis dui a arcu
              volutpat feugiat. Mauris luctus erat urna, vitae volutpat dui
              luctus eu.
            </p>
          </Container>
          </Container>
        </Row>
        {/* <Row style={{ backgroundColor: "#511135" }}>
          <Container className="text-center mb-4">
            <h1 className="display-5 p-2 mt-4 mb-4 border border-white">
              Get in Touch
            </h1>
            
          </Container>
        </Row> */}
      </div>
    );
  }
}

import React, { useState } from 'react'
import { Carousel, ResponsiveEmbed } from 'react-bootstrap'
import Slide1 from '../styles/images/slide1.jpg'
import Slide3 from '../styles/images/slide3.jpg'
import Slide4 from '../styles/images/slide4.jpg'
import Slide5 from '../styles/images/slide5.jpg'
import SourceCode from '../styles/images/source_code.mp4'
import Office from '../styles/images/office.mp4'
import Laptop from '../styles/images/laptop.mp4'
import Keyboard from '../styles/images/keyboard.mp4'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div>
            <Carousel controls={false} slide={false} activeIndex={index} onSelect={handleSelect} className="car-wid mx-auto bg-blend">
                <Carousel.Item>
                {/* <img
                    className="d-block carousel-img w-100"
                    src={Slide1}
                    alt="First slide"
                /> */}
                <ResponsiveEmbed aspectRatio="16by9">
                    <video autoPlay="true" loop>
                        <source type="video/mp4" src={SourceCode} />
                    </video>
                </ResponsiveEmbed>
                <Carousel.Caption>
                    <h3 className="animated rotateInUpRight">First slide label</h3>
                    <p className="animated rotateInUpRight">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                {/* <img
                    className="d-block carousel-img w-100"
                    src={Slide4}
                    alt="Second slide"
                /> */}
                <ResponsiveEmbed aspectRatio="16by9">
                    <video autoPlay="true" loop>
                        <source type="video/mp4" src={Office} />
                    </video>
                </ResponsiveEmbed>
                <Carousel.Caption>
                    <h3 className="animated rotateInUpRight">Second slide label</h3>
                    <p className="animated rotateInUpRight">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                {/* <img
                    className="d-block carousel-img w-100"
                    src={Slide5}
                    alt="Third slide"
                /> */}
                <ResponsiveEmbed aspectRatio="16by9">
                    <video autoPlay="true" loop>
                        <source type="video/mp4" src={Laptop} />
                    </video>
                </ResponsiveEmbed>
                <Carousel.Caption>
                    <h3 className="animated rotateInUpRight">Third slide label</h3>
                    <p className="animated rotateInUpRight">
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                {/* <img
                    className="d-block carousel-img w-100"
                    src={Slide3}
                    alt="Third slide"
                /> */}
                <ResponsiveEmbed aspectRatio="16by9">
                    <video autoPlay="true" loop>
                        <source type="video/mp4" src={Keyboard} />
                    </video>
                </ResponsiveEmbed>
                <Carousel.Caption>
                    <h3 className="animated rotateInUpRight">Fourth slide label</h3>
                    <p className="animated rotateInUpRight">
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
                </Carousel.Item>
    
            </Carousel>
        
        </div>
    );
  }
  
  export default ControlledCarousel 

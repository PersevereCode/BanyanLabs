import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import Slide1 from '../styles/images/slide1.jpg'
import Slide2 from '../styles/images/slide2.jpg'
import Slide3 from '../styles/images/slide3.jpg'
import Slide4 from '../styles/images/slide4.jpg'
import Slide5 from '../styles/images/slide5.jpg'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect} className="car-wid bg-dark mx-auto">
                <Carousel.Item>
                <img
                    className="d-block carousel-img w-100"
                    src={Slide1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="animated rotateInUpRight">First slide label</h3>
                    <p className="animated rotateInUpRight">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block carousel-img w-100"
                    src={Slide4}
                    alt="Second slide"
                />
        
                <Carousel.Caption>
                    <h3 className="animated rotateInUpRight">Second slide label</h3>
                    <p className="animated rotateInUpRight">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block carousel-img w-100"
                    src={Slide5}
                    alt="Third slide"
                />
        
                <Carousel.Caption>
                    <h3 className="animated rotateInUpRight">Third slide label</h3>
                    <p className="animated rotateInUpRight">
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block carousel-img w-100"
                    src={Slide3}
                    alt="Third slide"
                />
        
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

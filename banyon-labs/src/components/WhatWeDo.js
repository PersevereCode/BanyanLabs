import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted'
import { Fade } from 'react-reveal'

const WhatWeDo = (props) => {
    // const [style, setStyle] = useState({background: "green"})
    const [show, setShow] = useState(
        {
            "default": true,
            "process": false,
            "web":false,
            "mobile": false,
            "testing": false
        }
        )
    return (
        <div className="d-flex flex-column bg-light mt-3">
            <h3 className='text-center display-4 bg-light' onMouseOver={() => setShow({
                            "default": true,
                            "process": false,
                            "web":false,
                            "mobile": false,
                            "testing": false
                    })}>What We Do</h3>
            <Fade right>
            <div className="row px-5 ">
                <div className="display-5 my-3 col-12">
                    <h4 className="text-indent text-justify"><em>Lorem "ipsum dolor, sit amet consectetur adipisicing  ratione earum voluptates dignissimos ullam quod rerum pariatur minima!"</em></h4>
                </div>
                <div className="col col-lg-5 d-flex flex-column mb-3">
                    <ListGroup>
                        <ListGroup.Item className="bg-light mb-2" onMouseOver={() => setShow({
                            "default": false,
                            "process": true,
                            "web":false,
                            "mobile": false,
                            "testing": false
                    })}><FormatListBulletedIcon className="mr-2" />Our Process</ListGroup.Item>
                        <ListGroup.Item className="bg-light mb-2" onMouseOver={() => setShow({
                            "default": false,
                            "process": false,
                            "web": true,
                            "mobile": false,
                            "testing": false
                    })}><DesktopWindowsIcon className="mr-2" />Web Apps</ListGroup.Item>
                        <ListGroup.Item className="bg-light mb-2" onMouseOver={() => setShow({
                            "default": false,
                            "process": false,
                            "web":false,
                            "mobile": true,
                            "testing": false
                    })}><PhoneAndroidIcon className="mr-2" />Mobile Apps</ListGroup.Item>
                        <ListGroup.Item className="bg-light" onMouseOver={() => setShow({
                            "default": false,
                            "process": false,
                            "web":false,
                            "mobile": false,
                            "testing": true
                    })}><AssignmentTurnedInIcon className="mr-2" />Testing Services</ListGroup.Item>
                    </ListGroup>
                </div>
                <div className="col">
                    {
                        show.default 
                    }
                    {
                        show.process && <div className="animated fadeIn slow">
                                            <p className="text-center">Our Process </p> <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nihil, itaque laborum magnam deserunt eius dicta et excepturi odit minima accusantium id officiis ipsa, blanditiis dolores eveniet maiores, quisquam temporibus.
                                            </p>
                                        </div>
                    }
                    {
                        show.web && <div className="animated fadeIn slow">
                                        <p className="text-center">Web Apps
                                        </p> 
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nihil, itaque laborum magnam deserunt eius dicta et excepturi odit minima accusantium id officiis ipsa, blanditiis dolores eveniet maiores, quisquam temporibus.
                                        </p>
                                    </div>
                    }
                    {
                        show.mobile && <div className="animated fadeIn slow">
                                            <p className="text-center">Mobile Apps
                                            </p> 
                                            <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nihil, itaque laborum magnam deserunt eius dicta et excepturi odit minima accusantium id officiis ipsa, blanditiis dolores eveniet maiores, quisquam temporibus.
                                            </p>
                                       </div>
                    }
                    {
                        show.testing && <div className="animated fadeIn slow">
                                            <p className="text-center">Testing Services
                                            </p> 
                                            <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nihil, itaque laborum magnam deserunt eius dicta et excepturi odit minima accusantium id officiis ipsa, blanditiis dolores eveniet maiores, quisquam temporibus.
                                            </p>
                                        </div>
                    }
                </div>
            </div>
            </Fade>
        </div>
    )
}
export default WhatWeDo
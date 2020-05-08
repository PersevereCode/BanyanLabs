import React from 'react'
import { Fade } from 'react-reveal'
import SS1 from '../styles/images/ss.webp'
import PLogo from '../styles/images/persLogo.png'
import NLogo from '../styles/images/naico.jpg'
import { Link } from "react-router-dom"
import Team from '../styles/images/team.jpg'

export default function WhoWeAre() {

    return (
        <div className="row justify-content-center p-5">
            <div className="text-center">
            <Link className="no-dec" to="/about_us"><h3 className="display-4 prim-txt">Who We Are</h3></Link>
            </div>
               
            {/* <h3 className="text-center col-12 mt-3"><Link className="no-dec" to="/about_us">About Us</Link></h3>    */}
                
                <div>
                    <Link className="no-dec" to="/mission"><h3 className="header-size-2 sec-txt">Mission</h3></Link>
                    <p className="text-justify lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores voluptates porro non alias? Quidem, repellendus. Iure odit officiis quas. Earum voluptatibus suscipit deserunt illum totam fugiat asperiores officia laborum qui! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate natus temporibus ipsum, eveniet magni nobis nesciunt laboriosam ex corporis, rem maxime ullam aliquam ipsam beatae debitis, voluptates consequuntur dolores non.</p>
                    <h4 className="header-size-2 pt-3 sec-txt">Client Value</h4>
                    <p className="text-justify lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores voluptates porro non alias? Quidem, repellendus. Iure odit officiis quas. Earum voluptatibus suscipit deserunt illum totam fugiat asperiores officia laborum qui! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate natus temporibus ipsum, eveniet magni nobis nesciunt laboriosam ex corporis, rem maxime ullam aliquam ipsam beatae debitis, voluptates consequuntur dolores non.</p>
                    <h4 className="header-size-2 pt-3 sec-txt">Associate Opportunity</h4>
                    <p className="text-justify lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores voluptates porro non alias? Quidem, repellendus. Iure odit officiis quas. Earum voluptatibus suscipit deserunt illum totam fugiat asperiores officia laborum qui! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate natus temporibus ipsum, eveniet magni nobis nesciunt laboriosam ex corporis, rem maxime ullam aliquam ipsam beatae debitis, voluptates consequuntur dolores non.</p>
                </div>
                <div>
                    <Link className="no-dec" to="/team"><h3 className="text-center display-4 prim-txt">Team</h3></Link>
                    <img className="med-pic" src={Team} alt="image"/>
                </div>
                {/* <div className="mt-4">
                    
                    <h4 className="header-size-2 sec-txt">Management</h4>
                    <div className="row justify-content-between">
                        <div className="card col">
                            <div className="card-body row justify-content-between">
                                <img src={SS1} alt="" className="small-photo col"/>
                                <p className="col">Lorem ipsum </p>
                            </div>
                        </div>
                        <div className="card col">
                            <div className="card-body row justify-content-between">
                                <img src={SS1} alt="" className="small-photo col"/>
                                <p className="col">Lorem ipsum  </p>
                            </div>
                        </div>
                        <div className="card col">
                            <div className="card-body row justify-content-between">
                                <img src={SS1} alt="" className="small-photo col"/>
                                <p className="col">Lorem ipsum </p>
                            </div>
                        </div>
                        <div className="card col">
                            <div className="card-body row justify-content-between">
                                <img src={SS1} alt="" className="small-photo col"/>
                                <p className="col">Lorem ipsum e</p>
                            </div>
                        </div>
                    </div>
                     
                    <h4 className="header-size-2 pt-3 sec-txt">Associates</h4>
                    <div className="row justify-content-between">
                        <div className="card col">
                            <div className="card-body row justify-content-between">
                                <img src={SS1} alt="" className="small-photo col"/>
                                <p className="col">Lorem ipsum </p>
                            </div>
                        </div>
                        <div className="card col">
                            <div className="card-body row justify-content-between">
                                <img src={SS1} alt="" className="small-photo col"/>
                                <p className="col">Lorem ipsum  </p>
                            </div>
                        </div>
                        <div className="card col">
                            <div className="card-body row justify-content-between">
                                <img src={SS1} alt="" className="small-photo col"/>
                                <p className="col">Lorem ipsum </p>
                            </div>
                        </div>
                        <div className="card col">
                            <div className="card-body row justify-content-between">
                                <img src={SS1} alt="" className="small-photo col"/>
                                <p className="col">Lorem ipsum e</p>
                            </div>
                        </div>
                    </div> 
                </div> */}
                <div className="col-12 text-center mt-3">
                <Link className="no-dec" to="/partners"><h3 className="display-4 prim-txt">Partners</h3></Link>
                    <div className="row justify-content-around">
                        <img src={PLogo} className="mt-4" style={{minWidth: "300px", "height": "110px", maxWidth: "500px" }} />
                        <img src={NLogo} alt=""/>
                    </div>
                </div>
            
        </div>
    )
}

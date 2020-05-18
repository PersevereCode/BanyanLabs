import React from 'react'
import { Image } from 'react-bootstrap'
import Map from '../styles/images/maps_picture.png';

export default function Information() {
    return (
        <div className="contact_info_div container-fluid">
            <div className="row justify-content-center align-items-center text-center p-3">
                <div className="col-lg-5 col-md-12">
                    <h2 className="text-light contact_attributes"><a target="_blank" className="no-dec text-light" href="https://www.google.com/maps/place/4147+Willow+Lake+Blvd,+Memphis,+TN+38118/@35.0362499,-89.8920736,17z/data=!3m1!4b1!4m5!3m4!1s0x887f8f7fa91059b3:0xee53bbc45675fed3!8m2!3d35.0362499!4d-89.8898849">4147 Willow Lake Blvd. Memphis, TN 38118</a></h2>
                    <h2 className="text-light contact_attributes">contact@banyanlabs.io</h2>
                    <h2 className="text-light contact_attributes">Phone # (877) 260-7299</h2>
                </div>
                <div  className="col-lg-5 col-md-12">
                    <a target="_blank" href="https://www.google.com/maps/place/4147+Willow+Lake+Blvd,+Memphis,+TN+38118/@35.0362499,-89.8920736,17z/data=!3m1!4b1!4m5!3m4!1s0x887f8f7fa91059b3:0xee53bbc45675fed3!8m2!3d35.0362499!4d-89.8898849"><Image fluid src={Map} className="dd" /></a>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import Map from '../components/Map';

export default function Information() {
    return (
        <div className="contact_info_div container-fluid">
            <div className="row justify-content-center align-items-center p-3">
                <div className="col-lg-5 col-md-12">
                    <h2 className="text-light contact_attributes">4147 Willow Lake Blvd. Memphis, TN 38118</h2>
                    <h2 className="text-light contact_attributes">contact@banyanlabs.io</h2>
                    <h2 className="text-light contact_attributes">Phone # (877) 260-7299</h2>
                </div>
                <div  className="col-lg-5 col-md-12">
                    <Map className="dd"/>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import Map from '../components/Map';

export default function Information() {
    return (
        <div>
            <div className="row justify-content-center align-items-center border border-white p-3 mb-3 contact_info_div">
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

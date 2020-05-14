import React from 'react'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted'
import { Link } from 'react-router-dom'

const WhatWeDo = (props) => {
    const iconStyles = {
        fontSize: '48px'
    }
    return(
        <div className='row px-5 justify-content-around bg-light'>
            <div className='d-flex flex-column align-items center justify-content-center col-12 my-3'>
                <h1 className='text-center prim-txt display-4'>What We Do</h1>
            </div>
            <div className='d-flex flex-column align-items-center justify-content-center col-md-9 col-lg-9 col-sm-12 mb-3'
            >
                <Link to='/services/1' className='d-flex flex-column no-dec'>
                    <FormatListBulletedIcon style={{...iconStyles, color: "#494d83"}} className='mb-3 align-self-center iconH' />
                    <h2 className='mb-3 sec-txt hover-sec wordH'>Our Process</h2>
                </Link> 
                <p className="text-center lead">Banyan Labs will work closely with you to gather product requirements before presenting a proposal. Once given the green light, we will refine and prioritize your user stories and begin an iterative product development cycle which includes regular product demos and, as required, user testing. Communication and status update with our clients is a top priority.</p>
                <p className="text-center lead">At Banyan Labs, we provide tailor-made business solutions that enhance your opportunities and streamline your processes. We believe in long term partnerships that create extraordinary experiences.</p>
            </div>
                <div className='d-flex flex-column align-items-center col-md-4 col-lg-4 col-sm-12 mb-3'>
                    <Link to='/services/2' className='d-flex flex-column no-dec'>
                        <DesktopWindowsIcon style={{...iconStyles, color: "#494d83"}} className='mb-3 align-self-center iconH' />
                        <h2 to='/services/2' className='mb-3 sec-txt hover-sec wordH'>Web Apps</h2> 
                    </Link>
                    <p className='text-center lead'>
                    Front end, back end, and design. Let us help you make your best impression online.</p>
                </div>
                <div className='d-flex flex-column align-items-center col-md-4 col-lg-4 col-sm-12 mb-3'>
                    <Link to='/services/3' className='d-flex flex-column no-dec'>
                        <PhoneAndroidIcon style={{...iconStyles, color: "#494d83"}} className='mb-3 align-self-center iconH' />
                        <h2 to='/services/3' className='mb-3 sec-txt hover-sec wordH'>Mobile Apps</h2>
                    </Link> 
                    <p className='text-center lead'>
                    iOS? Check. Android? Check. Cross-platform solutions? Yeah, we can do that.</p>
                </div>
                <div className='d-flex flex-column align-items-center col-md-4 col-lg-4 col-sm-12 mb-3'>
                    <Link to='/services/4' className='d-flex flex-column no-dec'>
                        <AssignmentTurnedInIcon style={{...iconStyles, color: "#494d83"}} className='mb-3 align-self-center iconH' />
                    <h2 to='/services/4' className='text-center mb-3 sec-txt hover-sec wordH'>Quality Assurance</h2>
                    </Link> 
                    <p className='text-center lead'>
                    Say what we do. Do what we say. Prove it. Improve it.

                    Minimizing your risks is part of our process whether it’s manual performance testing or automated functional testing.
                    </p>
                </div>
        </div>
    )
}
export default WhatWeDo
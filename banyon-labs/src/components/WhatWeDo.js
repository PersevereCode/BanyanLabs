import React from 'react'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted'
import { Link } from 'react-router-dom'
import Process from '../styles/images/ourprocess.png'
import { Image } from 'react-bootstrap'

const WhatWeDo = (props) => {
    const iconStyles = {
        fontSize: '48px'
    }
    return(
        <div className='row px-5 justify-content-around bg-light'>
            <div className='d-flex flex-column align-items center justify-content-center col-12 my-3'>
                <h1 className='text-center text-dark display-4'>What We Do</h1>
            </div>
            <div className='d-flex flex-column align-items-center justify-content-center col-md-12 col-lg-12 col-sm-12 mb-3'
            >
                <Link to='/services/1' className='d-flex flex-column no-dec'>
                    <FormatListBulletedIcon style={iconStyles} className='mb-3 align-self-center' />
                    <h2 className='mb-3'>Our Process</h2>
                </Link> 
                <Image src={Process} style={{height: "auto", width: '50vw', maxHeight: '400px', maxWidth: '800px'}} />
                <p className='text-center mt-4'>
                At Banyan Labs, we provide tailor-made business solutions that enhance your opportunities and streamline your processes. We believe in long term partnerships that create extraordinary experiences.</p>
            </div>
                <div className='d-flex flex-column align-items-center justify-content-center col-md-4 col-lg-4 col-sm-12 mb-3'>
                    <Link to='/services/2' className='d-flex flex-column no-dec'>
                        <DesktopWindowsIcon style={iconStyles} className='mb-3 align-self-center' />
                        <h2 to='/services/2' className='mb-3'>Web Apps</h2> 
                    </Link>
                    <p className='text-center'>
                    Front end, back end, and design. Let us help you make your best impression online.</p>
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center col-md-4 col-lg-4 col-sm-12 mb-3'>
                    <Link to='/services/3' className='d-flex flex-column no-dec'>
                        <PhoneAndroidIcon style={iconStyles} className='mb-3 align-self-center' />
                        <h2 to='/services/3' className='mb-3'>Mobile Apps</h2>
                    </Link> 
                    <p className='text-center'>
                    iOS? Check. Android? Check. Cross-platform solutions? Yeah, we can do that.</p>
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center col-md-4 col-lg-4 col-sm-12 mb-3'>
                    <Link to='/services/4' className='d-flex flex-column no-dec'>
                        <AssignmentTurnedInIcon style={iconStyles} className='mb-3 align-self-center' />
                    <h2 to='/services/4' className='text-center mb-3'>Quality Assurance</h2>
                    </Link> 
                    <p className='text-center'>
                    Say what we do. Do what we say. Prove it. Improve it.

                    Minimizing your risks is part of our process whether it’s manual performance testing or automated functional testing.
                    </p>
                </div>
        </div>
    )
}
export default WhatWeDo
import React, { useState } from 'react'
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
                <h1 className='text-center display-4'>What We Do</h1>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center col-md-6 col-lg-3 col-sm-12 mb-3 "
            >
                <Link to='/services/1'>
                    <FormatListBulletedIcon style={iconStyles} className='mb-3' />
                </Link>
                <Link to='/services/1' style={{fontSize: '26px'}} className='mb-3'>Our Process</Link> 
                <p className='text-center'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nihil, itaque laborum magnam deserunt eius dicta et excepturi odit minima accusantium id officiis ipsa, blanditiis dolores eveniet maiores, quisquam temporibus.</p>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center col-md-6 col-lg-3 col-sm-12 mb-3">
                <Link to='/services/2'>
                    <DesktopWindowsIcon style={iconStyles} className='mb-3' />
                </Link>
                <Link to='/services/2' style={{fontSize: '26px'}} className='mb-3'>Web Apps</Link> 
                <p className='text-center'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nihil, itaque laborum magnam deserunt eius dicta et excepturi odit minima accusantium id officiis ipsa, blanditiis dolores eveniet maiores, quisquam temporibus.</p>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center col-md-6 col-lg-3 col-sm-12 mb-3">
                <Link to='/services/3'>
                    <PhoneAndroidIcon style={iconStyles} className='mb-3' />
                </Link>
                <Link to='/services/3' style={{fontSize: '26px'}} className='mb-3'>Mobile Apps</Link> 
                <p className='text-center'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nihil, itaque laborum magnam deserunt eius dicta et excepturi odit minima accusantium id officiis ipsa, blanditiis dolores eveniet maiores, quisquam temporibus.</p>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center col-md-6 col-lg-3 col-sm-12 mb-3">
                <Link to='/services/4'>
                    <AssignmentTurnedInIcon style={iconStyles} className='mb-3' />
                </Link>
                <Link to='/services/4' className='text-center mb-3' style={{fontSize: '26px'}}>Testing Services</Link> 
                <p className='text-center'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nihil, itaque laborum magnam deserunt eius dicta et excepturi odit minima accusantium id officiis ipsa, blanditiis dolores eveniet maiores, quisquam temporibus.</p>
            </div>
        </div>
    )
}
export default WhatWeDo
import React, { Component } from 'react'
import Carousel from '../../components/Carousel'
import WhatWeDo from '../../components/WhatWeDo'
import WhoWeAre from '../../components/WhoWeAre'
import Information from '../../components/Information'
import BackgroundImage from "../../styles/images/aboutBackground.jpg"

export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <WhoWeAre />
                <WhatWeDo />
                <Information />
            </div>
        )
    }
}

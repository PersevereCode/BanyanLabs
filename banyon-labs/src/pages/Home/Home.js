import React, { Component } from 'react'
import Carousel from '../../components/Carousel'
import WhatWeDo from '../../components/WhatWeDo'
import WhoWeAre from '../../components/WhoWeAre'
import ContactForm from '../../components/Form'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <WhoWeAre />
                <WhatWeDo />
            </div>
        )
    }
}

import React from 'react'
import BannerImg from '../components/BannerImg'
import EventName from '../components/EventName'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Event = () => {
    return (
        <>
        <Navbar/>
        <BannerImg
            heading="The Future Tech 1.0"
            text="Events"
        />
        <EventName/>
        <Footer/>
        </>
    )
}

export default Event

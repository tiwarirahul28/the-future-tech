import React from 'react'
import BannerImg from '../components/BannerImg'
import EventName from '../components/EventName'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import EventScheduleList from '../components/Schedule/EventScheduleList'

const Event = () => {
    return (
        <>
        <Navbar/>
        <BannerImg
            heading="The Future Tech 1.0"
            text="Events"
        />
        <EventName/>
        <EventScheduleList/>
        <Footer/>
        </>
    )
}

export default Event

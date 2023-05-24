import React from 'react'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import HomeSlider from '../components/HomeSlider'
import Navbar from '../components/Navbar'
import EventSchedule from '../components/Schedule/EventSchedule'

const Home = () => {
    return (
        <>
        <Navbar/>
        <HeroImg/>
        <HomeSlider/>
        <EventSchedule/>
        <Footer/>
        </>
    )
}

export default Home

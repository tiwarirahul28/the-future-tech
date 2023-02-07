import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BannerImg from '../components/BannerImg'
import AboutUs from '../components/AboutUs'

const About = () => {
    return (
        <>
           <Navbar/>
           <BannerImg
                heading="About"
                text=""
            />
            <AboutUs/>
           <Footer/>
        </>
    )
}

export default About

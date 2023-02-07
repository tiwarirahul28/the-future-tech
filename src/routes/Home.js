import React from 'react'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import HomeSlider from '../components/HomeSlider'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <>
        <Navbar/>
        <HeroImg/>
        <HomeSlider/>
        <Footer/>
        </>
    )
}

export default Home

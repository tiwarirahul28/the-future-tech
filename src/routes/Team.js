import React from 'react'
import BannerImg from '../components/BannerImg'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import TeamName from '../components/TeamName'

const Team = () => {
    return (
        <>
            <Navbar/>
            <BannerImg
                heading="Teams"
            />
            <TeamName/>
            <Footer/>
        </>
    )
}

export default Team

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
                heading="The Future Tech 1.0"
                text="Team"
            />
            <TeamName/>
            <Footer/>
        </>
    )
}

export default Team

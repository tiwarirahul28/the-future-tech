import React from 'react'
import Navbar from '../components/Navbar'
import OnepointZero from '../components/TechFest/OnepointZero'
import BannerImg from '../components/BannerImg'
import Footer from '../components/Footer'

const Futuretech1 = () => {
  return (
    <>
        <Navbar/>
        <BannerImg
            heading="The Future Tech"
            text="1.O"
        />
        <OnepointZero/>
        <Footer/>
    </>
    )
}

export default Futuretech1
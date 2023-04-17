import React from 'react'
import BannerImg from '../components/BannerImg'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import GalleryData from '../GalleryData'

const Gallery = () => {
  return (
    <>
    <Navbar/>
    <BannerImg
        heading="The Future Tech 1.0"
        text="Gallery"
    />
    <GalleryData/>
    <Footer />
    </>
  )
}

export default Gallery
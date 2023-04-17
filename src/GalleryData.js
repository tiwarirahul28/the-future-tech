import React from 'react'
import FestGallery from './components/FestGallery'
import ImgOne from './assets/gallery/image-one.jpg'
import ImgTwo from './assets/gallery/image-two.jpg'
import ImgThree from './assets/gallery/image-three.jpg'
import ImgFour from './assets/gallery/image-four.jpg'
import ImgFive from './assets/gallery/image-five.jpg'
import ImgSix from './assets/gallery/image-six.jpg'
import ImgSeven from './assets/gallery/image.seven.jpg'
import ImgEight from './assets/gallery/image.eight.jpg'
import ImgNine from './assets/gallery/image-nine.jpg'
import ImgTen from './assets/gallery/image-ten.jpg'
import ImgEleven from './assets/gallery/image-eleven.jpg'
import ImgTwelve from './assets/gallery/image-twelve.jpg'
import ImgThirteen from './assets/gallery/image-thirteen.jpg'

const GalleryData = () => {
    const galleryImages = [
        {
          img: ImgOne
        },
        {
          img: ImgTwo
        },
        {
          img: ImgThree
        },
        {
          img: ImgFour
        },
        {
          img: ImgFive
        },
        {
          img: ImgSix
        },
        {
          img: ImgSeven
        },
        {
          img: ImgEight
        },
        {
          img: ImgNine
        },
        {
          img: ImgTen
        },
        {
          img: ImgEleven
        },
        {
          img: ImgTwelve
        },
        {
          img: ImgThirteen
        },

    ]
    return (
        <>
        <FestGallery
            galleryImages={galleryImages}
        />
        </>
    )
}

export default GalleryData
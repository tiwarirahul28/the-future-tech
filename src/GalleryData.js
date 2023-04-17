import React from 'react'
import FestGallery from './components/FestGallery'
import ImgOne from './assets/gallery/image-one.webp'
import ImgTwo from './assets/gallery/image-two.webp'
import ImgThree from './assets/gallery/image-three.webp'
import ImgFour from './assets/gallery/image-four.webp'
import ImgFive from './assets/gallery/image-five.webp'
import ImgSix from './assets/gallery/image-six.webp'
// import ImgSeven from './assets/gallery/image.seven.webp'
import ImgEight from './assets/gallery/image.eight.webp'
import ImgNine from './assets/gallery/image-nine.webp'
import ImgTen from './assets/gallery/image-ten.jpg'
import ImgEleven from './assets/gallery/image-eleven.webp'
import ImgTwelve from './assets/gallery/image-twelve.webp'
import ImgThirteen from './assets/gallery/image-thirteen.webp'

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
        // {
        //   img: ImgSeven
        // },
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
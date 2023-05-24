import React from 'react'
import FestGallery from './components/FestGallery'
import ImgOne from './assets/gallery/image-one.webp'
import ImgTwo from './assets/gallery/explaining.webp'
import ImgThree from './assets/gallery/image-three.webp'
import ImgFour from './assets/gallery/GuestPhoto.webp'
import ImgFive from './assets/gallery/image-five.webp'
import ImgSix from './assets/gallery/image-six.webp'
import ImgSeven from './assets/gallery/photo.webp'
import ImgEight from './assets/gallery/vihaan.webp'
import ImgNine from './assets/gallery/image-nine.webp'
import ImgTen from './assets/gallery/image-ten.jpg'
import ImgEleven from './assets/gallery/image-eleven.webp'
import ImgTwelve from './assets/gallery/Gphoto.webp'
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
        {
          img: ImgSeven
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
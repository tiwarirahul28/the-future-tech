import React from 'react'
import './BannerImgStyle.css'

const BannerImg = ({heading, text}) => {
    return (
        <>
        <div className='hero-img'>
            <div className='heading-other'>
                <h1>{heading}</h1>
                <p>{text}</p>
            </div>
        </div>
        </>
    )
}

export default BannerImg

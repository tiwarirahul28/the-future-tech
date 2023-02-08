import React from 'react'
import './HeroStyle.css'
import BannerVideo from '../assets/images/welcome-video.mp4'

const HeroImg = () => {
    return (
        <>
        <section className='home' id='home'>
            <div className='content'>
            <h3>amazing Tech</h3>
                <h1>welcome The Future Tech</h1>
                <p>The Future Tech is an inter-collegiate IT event organized by the students of Bachelor of Science in Information Technology (B.Sc-I.T.) for the purpose of providing a platform for students to showcase their skills and knowledge in various tech related competitions.</p>
                <a rel="noreferrer" href="https://forms.gle/TvvUDAobVyMZaxmB8" target="_blank" class="btn">register</a>
            </div>
            <div className='image'>
           <video controls="false" autoplay="autoplay" loop muted src={BannerVideo}/>
            </div>
        </section>
        </>
    )
}

export default HeroImg

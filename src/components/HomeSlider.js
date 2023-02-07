import React from 'react'
import './HomeSliderstyle.css'
import Debug from '../assets/images/events/debug.jpg'
import ai from '../assets/images/events/ai.jpg'
import AndroidApplication from '../assets/images/events/Android-Application.jpg'
import BlindCoding from '../assets/images/events/Blind-Coding.png'
import EthicalHacking from '../assets/images/events/Ethical-Hacking.jpg'
import IOT from '../assets/images/events/IOT.jpg'
import Kahoot from '../assets/images/events/kahoot.jpg'
import Webdesigning from '../assets/images/events/Web-Designing.jpg'
import PosterVideo from '../assets/images/video-home.mp4'
const HomeSlider = () => {
    return (
        <>
        <section className="alpine-slider">
            <h1 className="heading">The Future Tech - <span> Events</span></h1>
            <div className="slider">
                <div className="slider__content">
                    <div className="slider__item">
                        <img className="slider__image" src={Debug} alt="events"/>
                        <div className="slider__info">
                            <h2>Artificial intelligence</h2>
                        </div>
                    </div>
                    
                    <div className="slider__item">
                        <img className="slider__image" src={ai} alt="events"/>
                        <div className="slider__info">
                            <h2>Android Application</h2>
                        </div>
                    </div>

                    <div className="slider__item">
                        <img className="slider__image" src={AndroidApplication} alt="events"/>
                        <div className="slider__info">
                            <h2>Blind Coding</h2>
                        </div>
                    </div>

                    <div className="slider__item">
                        <img className="slider__image" src={BlindCoding} alt="events"/>
                        <div className="slider__info">
                            <h2>Debug code</h2>
                        </div>
                    </div>

                    <div className="slider__item">
                        <img className="slider__image" src={EthicalHacking} alt="events"/>
                        <div className="slider__info">
                            <h2>Ethical Hacking</h2>
                        </div>
                    </div>

                    <div className="slider__item">
                        <img className="slider__image" src={IOT} alt="events"/>
                        <div className="slider__info">
                            <h2>Internet of Things</h2>
                        </div>
                    </div>

                    <div className="slider__item">
                        <img className="slider__image" src={Kahoot} alt="events"/>
                        <div className="slider__info">
                            <h2>Kahoot IT</h2>
                        </div>
                    </div>

                    <div className="slider__item">
                        <img className="slider__image" src={Webdesigning} alt="events"/>
                        <div className="slider__info">
                            <h2>Web Designing</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="event-banner">
            <video controls="false" autoplay="autoplay" loop muted  src={PosterVideo}/>
        </div>
        </>
    )
}

export default HomeSlider

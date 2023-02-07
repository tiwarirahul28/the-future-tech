import React from 'react';
import './EventNameStyle.css'
import Debug from '../assets/images/events/debug.jpg'
import ai from '../assets/images/events/ai.jpg'
import AndroidApplication from '../assets/images/events/Android-Application.jpg'
import BlindCoding from '../assets/images/events/Blind-Coding.png'
import EthicalHacking from '../assets/images/events/Ethical-Hacking.jpg'
import IOT from '../assets/images/events/IOT.jpg'
import Kahoot from '../assets/images/events/kahoot.jpg'
import Webdesigning from '../assets/images/events/Web-Designing.jpg'

const EventName = () => {
    return (
        <>
        <section class="team" id="team">
        {/* <h1 class="heading">Events</h1> */}
        <div class="box-container">
            <div class="box">
                <img src={Debug} alt="event-img"/>
                <div class="info">
                    <h3>Debug code</h3>
                    <span>rules</span>
                    <p></p>
                </div>
            </div>

            <div class="box">
                <img src={AndroidApplication} alt="event-img"/>
                <div class="info">
                    <h3>Android Application</h3>
                    <span>rules</span>
                    <p></p>
                </div>
            </div>

            <div class="box">
                <img src={IOT} alt="event-img"/>
                <div class="info">
                    <h3>IOT</h3>
                    <span>rules</span>
                    <p></p>
                </div>
            </div>

            <div class="box">
                <img src={BlindCoding} alt="event-img"/>
                <div class="info">
                    <h3>blind coding</h3>
                    <span>rules</span>
                    <p></p>
                </div>
            </div>

            <div class="box">
                <img src={ai} alt="event-img"/>
                <div class="info">
                    <h3>AI (artificial intelligence)</h3>
                    <span>rules</span>
                    <p></p>
                </div>
            </div>

            <div class="box">
                <img src={Kahoot} alt="event-img"/>
                <div class="info">
                    <h3>Kahoot IT</h3>
                    <span>rules</span>
                    <p></p>
                </div>
            </div>

            <div class="box">
                <img src={Webdesigning} alt="event-img"/>
                <div class="info">
                    <h3>web designing</h3>
                    <span>rules</span>
                    <p></p>
                </div>
            </div>

            <div class="box">
                <img src={EthicalHacking} alt="event-img"/>
                <div class="info">
                    <h3>Ethical Hacking</h3>
                    <span>rules</span>
                    <p></p>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default EventName

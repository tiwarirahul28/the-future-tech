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
                    <span>Rules:</span>
                    <p>Number of participant: 1</p>
                    <p>The participant have to debug the code we will be given in the following programing language </p>
                    <p>Language: Javascript, C++, Java, Python</p>
                </div>
            </div>

            <div class="box">
                <img src={AndroidApplication} alt="event-img"/>
                <div class="info">
                    <h3>Android Application</h3>
                    <span>Rules</span>
                    <p>Participants can participate in solo or teams(4 members).</p>
                    <p>Participants have make a Android application from scratch in our premises</p>
                </div>
            </div>

            <div class="box">
                <img src={IOT} alt="event-img"/>
                <div class="info">
                    <h3>IOT</h3>
                    <span>Rules</span>
                    <p>Participants can participate in solo or teams(4 members).</p>
                    <p>Only 1 member to register from each team in the given google form.</p>
                    <p>This event consist of two round</p>
                    <p>Ronud One: The participant have to make a presentation and have to present the presentation in front of the judges</p>
                    <p>Round Two: The selected participant have to implement the project within an 24 hour</p>
                </div>
            </div>

            <div class="box">
                <img src={BlindCoding} alt="event-img"/>
                <div class="info">
                    <h3>blind coding</h3>
                    <span>Rules</span>
                    <p>Number of participant: 1</p>
                    <p>This event consists of two rounds</p>
                    <p>Each participant has to write the code for the problem statement, with MONITOR OFF.</p>
                    <p>Language: Javascript, C++, Java, Python</p>
                </div>
            </div>

            <div class="box">
                <img src={ai} alt="event-img"/>
                <div class="info">
                    <h3>AI (artificial intelligence)</h3>
                    <span>Rules</span>
                    <p>Participants can participate in solo or teams(4 members).</p>
                    <p>Only 1 member to register from each team in the given google form.</p>
                    <p>This event consist of two round</p>
                    <p>Ronud One: The participant have to make a presentation and have to present the presentation in front of the judges</p>
                    <p>Round Two: The selected participant have to implement the project within an 24 hour</p>
                </div>
            </div>

            <div class="box">
                <img src={Kahoot} alt="event-img"/>
                <div class="info">
                    <h3>Kahoot IT</h3>
                    <span>Rules</span>
                    <p>Number of participant: 1</p>
                    <p>The participant have to answer the asked quizz question</p>
                </div>
            </div>

            <div class="box">
                <img src={Webdesigning} alt="event-img"/>
                <div class="info">
                    <h3>web designing</h3>
                    <span>Rules</span>
                    <p>Number of participant: 1</p>
                    <p>The participant have to make a website in any programing language of the following</p>
                    <p>Topics : E-Commerce, Web gallery, & Covide-19 Website</p>
                </div>
            </div>

            <div class="box">
                <img src={EthicalHacking} alt="event-img"/>
                <div class="info">
                    <h3>Ethical Hacking</h3>
                    <span>Rules</span>
                    <p>Participants can participate in solo or teams(4 members).</p>
                    <p>The participants have to follow the all Ethical rules.</p>
                    <p>No access of other machine.</p>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default EventName

import React from 'react';
import './EventNameStyle.css'
import Debug from '../assets/images/events/debug.png'
import ai from '../assets/images/events/ai.png'
import AndroidApplication from '../assets/images/events/android.png'
import BlindCoding from '../assets/images/events/blind.png'
import EthicalHacking from '../assets/images/events/hacking.png'
import IOT from '../assets/images/events/iot.png'
import Kahoot from '../assets/images/events/kahoot.png'
import Webdesigning from '../assets/images/events/web.png'
import Counter from '../assets/images/events/counter.jpg'
import Treasure from '../assets/images/events/treasure.jpg'

const EventName = () => {
    return (
        <>
        <section className="events-card">
            <div className='cards'>
                <div className='box'>
                    <img src={Debug} alt=''/>
                    <div className='box-info'>
                        <h1>Debug Me</h1>
                        <h3>Rules:</h3>
                        <p>Number of participant: 1</p>
                        <p>The participant have to debug the code we will be given in the following programing language </p>
                        <p>Language: Javascript, C++, Java, Python</p>
                    </div>
                </div>
                <div className='box'>
                    <img src={AndroidApplication} alt=''/>
                    <div className='box-info'>
                        <h1>Android Application</h1>
                        <h3>Rules:</h3>
                        <p>Participants can participate in solo or teams(4 members).</p>
                        <p>Participants have make a Android application from scratch in our premises</p>
                    </div>
                </div>
                <div className='box'>
                    <img src={BlindCoding} alt=''/>
                    <div className='box-info'>
                        <h1>Blind coding</h1>
                        <h3>Rules:</h3>
                        <p>Number of participant: 1</p>
                        <p>This event consists of two rounds</p>
                        <p>Each participant has to write the code for the problem statement, with MONITOR OFF.</p>
                        <p>Language: Javascript, C++, Java, Python</p>
                    </div>
                </div>
                <div className='box'>
                    <img src={ai} alt=''/>
                    <div className='box-info'>
                        <h1>artificial intelligence</h1>
                        <h3>Rules:</h3>
                        <p>Participants can participate in solo or teams(4 members).</p>
                        <p>Only 1 member to register from each team in the given google form.</p>
                        <p>This event consist of two round</p>
                        <p>Ronud One: The participant have to make a presentation and have to present the presentation in front of the judges</p>
                        <p>Round Two: The selected participant have to implement the project within an 24 hour</p>
                    </div>
                </div>
                <div className='box'>
                    <img src={EthicalHacking} alt=''/>
                    <div className='box-info'>
                        <h1>Ethical Hacking</h1>
                        <h3>Rules:</h3>
                        <p>Participants can participate in solo or teams(4 members).</p>
                        <p>The participants have to follow the all Ethical rules.</p>
                        <p>No access of other machine.</p>
                    </div>
                </div>
                <div className='box'>
                    <img src={IOT} alt=''/>
                    <div className='box-info'>
                        <h1>IOT</h1>
                        <h3>Rules:</h3>
                        <p>Participants can participate in solo or teams(4 members).</p>
                        <p>Only 1 member to register from each team in the given google form.</p>
                        <p>This event consist of two round</p>
                        <p>Ronud One: The participant have to make a presentation and have to present the presentation in front of the judges</p>
                        <p>Round Two: The selected participant have to implement the project within an 24 hour</p>
                    </div>
                </div>
                <div className='box'>
                    <img src={Kahoot} alt=''/>
                    <div className='box-info'>
                        <h1>Kahoot IT</h1>
                        <h3>Rules:</h3>
                        <p>Number of participant: 1</p>
                        <p>The participant have to answer the asked quizz question</p>
                    </div>
                </div>
                <div className='box'>
                    <img src={Webdesigning} alt=''/>
                    <div className='box-info'>
                        <h1>Web designing</h1>
                        <h3>Rules:</h3>
                        <p>Number of participant: 1</p>
                        <p>The participant have to make a website in any programing language of the following</p>
                        <p>Topics : E-Commerce, Web gallery, & Covide-19 Website</p>
                    </div>
                </div>
                <div className='box'>
                    <img src={Counter} alt=''/>
                    <div className='box-info'>
                        <h1>Counter strike</h1>
                        <h3>Rules:</h3>
                        <p>Comming soon</p>
                    </div>
                </div>
                <div className='box'>
                    <img src={Treasure} alt=''/>
                    <div className='box-info'>
                        <h1>treasure hunt</h1>
                        <h3>Rules:</h3>
                        <p>Comming soon</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default EventName

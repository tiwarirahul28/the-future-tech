import React from 'react'
import './HomeSliderstyle.css'
// import Debug from '../assets/images/events/debug.png'
// import AndroidApplication from '../assets/images/events/android.png'
// import BlindCoding from '../assets/images/events/blind.png'
import EventsCard from './EventsCard'
import EData from '../EData'
import PosterVideo from '../assets/images/video-home.mp4'
const HomeSlider = () => {
    return (
        <>
        <section className="events-card">
            <h1>The Future Tech 1.0</h1>
            <span>Events</span>
            <div className='cards'>
                {EData.map((val, ind) =>{
                    return(
                        <EventsCard
                            key={ind}
                            imgsrc={val.imgsrc}
                            name={val.name}
                            entryfees={val.entryfees}
                            rules={val.rules}
                            rulesone={val.rulesone}
                            rulestwo={val.rulestwo}
                            rulesthree={val.rulesthree}
                            rulesfour={val.rulesfour}
                            rulesfive={val.rulesfive}
                        />
                    )
                })}
                {/* <div className='box'>
                    <img src={Debug} alt=''/>
                    <div className='box-info'>
                        <h1>Debug Me</h1>
                        <h3>Rules:</h3>
                        <p>Number of participant: 1</p>
                        <p>The participant have to debug the code we will be given in the following programing language </p>
                        <p>Language: Javascript, C++, Java, Python</p>
                    </div>
                </div> */}
                {/* <div className='box'>
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
                </div> */}
            </div>
            <div className='view-all'>
                <a href='/events' className='btn'>Veiw All Events</a>
            </div>
        </section>
        <div class="event-banner">
            <video controls="false" autoplay="autoplay" loop muted  src={PosterVideo}/>
        </div>
        </>
    )
}

export default HomeSlider

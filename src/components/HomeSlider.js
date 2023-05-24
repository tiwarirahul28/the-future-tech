import React from 'react'
import './HomeSliderstyle.css'
import EventsCard from './EventsCard'
import EData from '../EData'
// import PosterVideo from '../assets/images/video-home.mp4'
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
                            // entryfees={val.entryfees}
                            rules={val.rules}
                            rulesone={val.rulesone}
                            rulestwo={val.rulestwo}
                            rulesthree={val.rulesthree}
                            rulesfour={val.rulesfour}
                            rulesfive={val.rulesfive}
                        />
                    )
                })}
            </div>
            <div className='view-all'>
                <a href='/events' className='btn'>Veiw All Events</a>
            </div>
        </section>
        {/* <div class="event-banner">
            <video controls="false" autoplay="autoplay" loop muted  src={PosterVideo}/>
        </div> */}
        </>
    )
}

export default HomeSlider

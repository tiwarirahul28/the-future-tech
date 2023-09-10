import React from 'react';
import './EventNameStyle.css'
import EMdata from '../Data/MEdata';
import EventsCard from './EventsCard';
const EventName = () => {
    return (
        <>
        <section className="events-card">
            <div className='cards'>
            {EMdata.map((val, ind) =>{
                    return(
                        <EventsCard
                            key={ind}
                            imgsrc={val.imgsrc}
                            name={val.name}
                            slug={`/events/${val?.slug}`}
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
            </div>
        </section>
        </>
    )
}

export default EventName

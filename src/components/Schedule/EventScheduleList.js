import React from 'react';
import ScheduleCard from './ScheduleCard'
import ScheduleDataList from './ScheduleDataList';
import './ScheduleStyle.css' 

const EventScheduleList = () => {
  return (
    <>
        <section className="events-card" id='ScheduleDataList'>
            <h1>The Future Tech 1.0</h1>
            <span>Day 1</span>
            <div className='schedule-container'>
                {ScheduleDataList.map((val, ind) => {
                    return(
                        <ScheduleCard
                            key={ind}
                            Day={val.Day}
                            Time={val.Time}
                            EventName={val.EventName}
                            Person={val.Person}
                            PersonNo={val.PersonNo}
                        />
                    )
                })}
            </div>
            <div className='view-all'>
                {/* <a href='/events' className='btn'>SEE ALL SCHEDULE</a> */}
            </div>
        </section>
    </>
  )
}

export default EventScheduleList
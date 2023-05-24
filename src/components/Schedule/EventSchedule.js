import React from 'react'
import ScheduleCard from './ScheduleCard'
import ScheduleData from './ScheduleData'
import './ScheduleStyle.css'

const EventSchedule = () => {
  return (
    <>
        <section className="events-card">
            <h1>Schedule List</h1>
            <span>Events Schedule</span>
            <div className='schedule-container'>
                {ScheduleData.map((val, ind) => {
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

export default EventSchedule
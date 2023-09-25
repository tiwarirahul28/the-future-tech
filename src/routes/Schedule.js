import React from 'react'
import BannerImg from '../components/BannerImg'
import EventSchedule from '../components/Schedule/EventScheduleList'

const Schedule = () => {
  return (
    <>
        <BannerImg
            heading="The Future Tech 1.0"
            text="Schedule"
        />
        <EventSchedule/>
    </>
  )
}

export default Schedule
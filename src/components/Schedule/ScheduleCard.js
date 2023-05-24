import React from 'react'

const ScheduleCard = ({Day, Time, EventName, Person, PersonNo}) => {
  return (
    <>
        <div className='schedule-box'>
            <div className='left-box'>
                <h5>{Day}</h5>
                <p>{Time}</p>
            </div>
            <div className='middle-box'>
                <p>{EventName}</p>
            </div>
            <div className='right-box'>
                <h6>{Person}</h6>
                <p>{PersonNo}</p>
            </div>
        </div>
    </>
  )
}

export default ScheduleCard
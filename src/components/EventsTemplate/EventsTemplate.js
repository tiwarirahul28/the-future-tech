import React from 'react'
import { useParams } from 'react-router-dom'
import './EventsTemplate.css'
import data from '../../Data/EData'
import NotFound from '../NotFound/NotFound'

const EventsTemplate = () => {
  const { slug } = useParams();
  const eventData = data.filter((val) => val.slug === slug);
  return ( 
    <div className='eventtemplate--section'>
      {eventData.length ? (
        <div className='eventtemplate--container'>
          <div className='eventtemplate--img'>
            <img src={eventData[0].imgsrc} alt='events'/>
          </div>
          <div className='eventtemplate--info'>
            <h1 className='eventtemplate--heading'>{eventData[0].name}</h1>
            <h2 className='eventtemplate--fees'>Entryfees: <span>{eventData[0].entryfees}</span>rs</h2>
            <h3 className='eventtemplate--rulesheading'>Rules: </h3>
            <div className='eventtemplate--rules'>
              <p>{eventData[0].rules}</p>
              <p>{eventData[0].rulesone}</p>
              <p>{eventData[0].rulestwo}</p>
              <p>{eventData[0].rulesthree}</p>
              <p>{eventData[0].rulesfour}</p>
            </div>
          </div>
        </div>
      ) : (
        <NotFound/>
      )}
    </div>
  )
}

export default EventsTemplate
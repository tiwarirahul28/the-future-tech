import React from 'react'
import './OnepointStyle.css'
import ImgNine from '../../assets/gallery/image-twelve.webp'


const OnepointZero = () => {
  return (
    <>
    <section className="events-card" id="event-container">
       <div className='event-box'>
        <div className='left-card'>
            <p>About the Event</p>
            <h4>Learn The Newest Strategy Of The Technology Industry</h4>
          </div>
          <div className='right-card'>
            <p>The Future Tech is an inter-collegiate IT event organized by the students of Bachelor of Science in Information Technology BScIT. for the purpose of providing a platform for students to showcase their skills and knowledge in various tech related competitions. The event will focus on a wide range of topics such as web development, mobile app development, robotics, artificial intelligence, machine learning and more. The participants will have an opportunity to gain hands-on experience in these areas while competing against their peers from other colleges and universities.</p>
            {/* <a rel="noreferrer" href="/gallery" class="btn">View All</a> */}
          </div>
       </div>
       <div className='event-video'>
        <img src={ImgNine}/>
       </div>
    </section>
    </>
  )
}

export default OnepointZero
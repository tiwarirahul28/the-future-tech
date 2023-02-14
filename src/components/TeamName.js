import React from 'react'
import './TeamNameStyle.css'
import Rahul from '../assets/images/team/rahul.jpg'
import SonalMam from '../assets/images/team/sonal-mam.jpg'
import ManjuMan from '../assets/images/team/manju-mam.jpeg'
// import Abhay from '../assets/images/team/abhay.jpeg'
// import Mihir from '../assets/images/team/mihir.jpg'
// import Chaitanya from '../assets/images/team/chaitanya.jpeg'
import Zohab from '../assets/images/team/zohab.jpeg';
import Arsalan from '../assets/images/team/arsalan.jpg';
const TeamName = () => {
    return (
        <>
        {/* <section id="events">
        <div className="main">
            <div className="profile-card">
                <div className="img">
                    <img src={ManjuMan} alt="team-img"/>
                </div>
                <div className="caption">
                    <h3>manju Suresh</h3>
                    <p>IT Coordinator</p>
                </div>
            </div>
            <div className="profile-card">
                <div className="img">
                    <img src={SonalMam} alt="team-img"/>
                </div>
                <div className="caption">
                    <h3>sonal Chavan</h3>
                    <p> advisor</p>
                </div>
            </div>
            <div className="profile-card">
                <div className="img">
                    <img src={Rahul} alt="team-img"/>
                </div>
                <div className="caption">
                    <h3>Rahul Tiwari</h3>
                    <p>Event Head</p>
                </div>
            </div>
            <div className="profile-card">
                <div className="img">
                    <img src={Arsalan} alt="team-img"/>
                </div>
                <div className="caption">
                    <h3>Arsalan Shaikh</h3>
                    <p>Event Manager</p>
                </div>
            </div>
            <div className="profile-card">
                <div className="img">
                    <img src={Zohab} alt="team-img"/>
                </div>
                <div className="caption">
                    <h3>Abu Zohab Shaikh</h3>
                    <p>Event Manager</p>
                </div>
            </div>
        </div>
        </section> */}
        <section id='team'>
            {/* <h1 className='heading'>HOD of Events</h1> */}
            <div className='team-container'>
                <div className='team-box'>
                    <img src={ManjuMan} alt=""/>
                    <h1>manju Suresh</h1>
                    <h2>IT Coordinator</h2>
                </div>
                <div className='team-box'>
                    <img src={SonalMam} alt=""/>
                    <h1>sonal chavan</h1>
                    <h2>advisor</h2>
                </div>
                <div className='team-box'>
                    <img src={Rahul} alt=""/>
                    <h1>Rahul Tiwari</h1>
                    <h2>Event Head</h2>
                    <a href='/'>+91 9324272772</a>
                </div>
                <div className='team-box'>
                    <img src={Arsalan} alt=""/>
                    <h1>arsalan shaikh</h1>
                    <h2>Event Manager</h2>
                    <a href='/'>+91 9324272772</a>
                </div>
                <div className='team-box'>
                    <img src={Zohab} alt=""/>
                    <h1>abu zohab shaikh</h1>
                    <h2>Event Manager</h2>
                    <a href='/'>+91 9324272772</a>
                </div>
            </div>
        </section>
        </>
    )
}

export default TeamName

import React from 'react'
import './TeamNameStyle.css'
import Rahul from '../assets/images/team/rahul.jpeg'
import SonalMam from '../assets/images/team/sonal-mam.jpg'
import ManjuMan from '../assets/images/team/manju-mam.jpeg'
import Abhay from '../assets/images/team/abhay.jpeg'
import Mihir from '../assets/images/team/mihir.jpeg'
import Chaitanya from '../assets/images/team/chaitanya.jpeg'
import Zohab from '../assets/images/team/zohab.jpeg';
import Arsalan from '../assets/images/team/arsalan.jpeg';
const TeamName = () => {
    return (
        <>
        <section id="events">
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
                    <p>Tech Head</p>
                </div>
            </div>
            <div className="profile-card">
                <div className="img">
                    <img src={Arsalan} alt="team-img"/>
                </div>
                <div className="caption">
                    <h3>Arsalan Shaikh</h3>
                    <p>Marketing Head</p>
                </div>
            </div>
            <div className="profile-card">
                <div className="img">
                    <img src={Abhay} alt="team-img"/>
                </div>
                <div className="caption">
                    <h3>Abhay Vishwakarma</h3>
                    <p>event manager</p>
                </div>
            </div>
            <div className="profile-card">
                <div className="img">
                    <img src={Mihir} alt="team-img"/>
                </div>
                <div className="caption">
                    <h3>mihir salgaonkar</h3>
                    <p>event manager</p>
                </div>
            </div>
            <div className="profile-card">
                <div className="img">
                    <img src={Chaitanya} alt="team-img"/>
                </div>
                <div className="caption">
                    <h3>Chaitanya Kadam</h3>
                    <p>volunteer Head</p>
                </div>
            </div>
            <div className="profile-card">
                <div className="img">
                    <img src={Zohab} alt="team-img"/>
                </div>
                <div className="caption">
                    <h3>Abu Zohab Shaikh</h3>
                    <p>Desgniner Head</p>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default TeamName

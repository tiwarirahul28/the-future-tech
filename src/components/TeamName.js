import React from 'react'
import './TeamNameStyle.css'
import Rahul from '../assets/images/team/rahul.jpeg'
import SonalMam from '../assets/images/team/sonal-mam.jpg'
import ManjuMan from '../assets/images/team/manju-mam.jpeg'
import Abhay from '../assets/images/team/abhay.jpeg'
import Mihir from '../assets/images/team/mihir.jpeg'
import Chaitanya from '../assets/images/team/chaitanya.jpeg'
const TeamName = () => {
    return (
        <>
        <section id="events">
        <div class="main">
            <div class="profile-card">
                <div class="img">
                    <img src={ManjuMan} alt="team-img"/>
                </div>
                <div class="caption">
                    <h3>manju Suresh</h3>
                    <p>IT Coordinator</p>
                </div>
            </div>
            <div class="profile-card">
                <div class="img">
                    <img src={SonalMam} alt="team-img"/>
                </div>
                <div class="caption">
                    <h3>sonal Chavan</h3>
                    <p>Vice IT Coordinator</p>
                </div>
            </div>
            <div class="profile-card">
                <div class="img">
                    <img src={Rahul} alt="team-img"/>
                </div>
                <div class="caption">
                    <h3>Rahul Tiwari</h3>
                    <p>Front End Developer</p>
                </div>
            </div>
            <div class="profile-card">
                <div class="img">
                    <img src={Abhay} alt="team-img"/>
                </div>
                <div class="caption">
                    <h3>Abhay Vishwakarma</h3>
                    <p>event manager</p>
                </div>
            </div>
            <div class="profile-card">
                <div class="img">
                    <img src={Mihir} alt="team-img"/>
                </div>
                <div class="caption">
                    <h3>mihir salgaonkar</h3>
                    <p>event manager</p>
                </div>
            </div>
            <div class="profile-card">
                <div class="img">
                    <img src={Chaitanya} alt="team-img"/>
                </div>
                <div class="caption">
                    <h3>Chaitanya Kadam</h3>
                    <p>Admin</p>
                </div>
            </div>
            {/* <div class="profile-card">
                <div class="img">
                    <img src="" alt="team-img"/>
                </div>
                <div class="caption">
                    <h3>Arsalan Shaikh</h3>
                    <p>Marketing</p>
                </div>
            </div> */}
        </div>
        </section>
        </>
    )
}

export default TeamName

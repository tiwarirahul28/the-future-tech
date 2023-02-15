import React from 'react'
import './TeamNameStyle.css'
// import Rahul from '../assets/images/team/rahul.jpg'
import SonalMam from '../assets/images/team/sonal-mam.jpg'
import ManjuMan from '../assets/images/team/manju-mam.jpeg'
import Abhay from '../assets/images/team/abhay.jpeg'
import Mihir from '../assets/images/team/mihir.jpg'
import Zohab from '../assets/images/team/zohab.jpeg';
import Arsalan from '../assets/images/team/arsalan.jpg';
// import Adib from '../assets/images/team/adib.jpg';
const TeamName = () => {
    return (
        <>
        <section id='team'>
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
                    <img src={Mihir} alt=""/>
                    <h1>Mihir Salgaonkar</h1>
                    <h2>Event Head</h2>
                    <a href='tel+91 8779330699'>+91 8779330699</a>
                </div>
                <div className='team-box'>
                    <img src={Abhay} alt=""/>
                    <h1>Abhay Vishwakarma</h1>
                    <h2>Event Head</h2>
                    <a href='tel+91 7738913369'>+91 7738913369</a>
                </div>
                <div className='team-box'>
                    <img src={Arsalan} alt=""/>
                    <h1>arsalan shaikh</h1>
                    <h2>Event Manager</h2>
                    <a href='tel:+91 8291799787'>+91 8291799787</a>
                </div>
                <div className='team-box'>
                    <img src={Zohab} alt=""/>
                    <h1>abu zohab shaikh</h1>
                    <h2>Event Manager</h2>
                    <a href='tel:+91 9930863310'>+91 9930863310</a>
                </div>
                {/* <div className='team-box'>
                    <img src={Rahul} alt=""/>
                    <h1>Rahul Tiwari</h1>
                    <h2>Teach Head</h2>
                    <a href='tel:+91 9324272772'>+91 9324272772</a>
                </div> */}
            </div>
                
        </section>
        </>
    )
}

export default TeamName

import React from 'react';
import './FooterStyle.css'
import Logo from '../assets/images/logo.png'
import {BsTelephone} from 'react-icons/bs'

const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="box-container">
                <div className="box">
                    <img src={Logo} alt='logo'/>
                    <p>The Future Tech Is An Inter-Collegiate IT Event Organized By The Students Of Bachelor Of Science In Information Technology (B.Sc-I.T.) For The Purpose Of Providing A Platform For Students To Showcase Their Skills And Knowledge In Various Tech Related Competitions.</p>
                    <a rel="noreferrer" href="https://forms.gle/TvvUDAobVyMZaxmB8" target="_blank" className='btn footer-btn'>Register</a>
                </div>
                <div className="box">
                    <h2>Contact us</h2>
                    <div className='footer-contact'>
                        <h3>Mihir Salgaonkar</h3>
                        <a href='tel:+91 8779330699'>
                            <BsTelephone size={20} style={{color: "#E62429"}}/>+91 8779330699
                        </a>
                        <h3>Abhay Vishwakarma</h3>
                        <a href='tel:+91 7738913369'>
                            <BsTelephone size={20} style={{color: "#E62429"}}/>+91 7738913369
                        </a>
                        <h3>Rahul Tiwari</h3>
                        <a href='tel:+91 9324272772'>
                            <BsTelephone size={20} style={{color: "#E62429"}}/>+91 9324272772
                        </a> 
                        <h3>Arsalan shaikh</h3>
                        <a href='tel:+91 8291799787'>
                            <BsTelephone size={20} style={{color: "#E62429"}}/>+91 8291799787
                        </a> 
                        <h3>Abu Zohab Shaikh </h3>
                        <a href='tel:+91 9930863310'>
                            <BsTelephone size={20} style={{color: "#E62429"}}/>+91 9930863310
                        </a> 
                       
                    </div>
                </div>
                <div className="box">
                    <h2>Pages</h2>
                    <div className='footer-link'>
                        <a href="/">Home</a>
                        <a href="/events">Events</a>
                        <a href="/teams">Team</a>
                        <a href="/about">About</a>
                    </div>
                </div>
                
                <div className="box">
                    <h2>Follow Us</h2>
                    <div className='footer-insta'>
                        <a rel="noreferrer" href="https://www.instagram.com/the.future.tech1.0/" target="_blank">instagram</a>
                    </div>
                </div>
            </div>
            <h1 className="credit"> Created By <a href="/">KES STUD</a> 2023</h1>
        </div>
        </>
    )
}

export default Footer

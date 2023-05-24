import React from 'react';
import './FooterStyle.css'
import Logo from '../assets/images/logo.png'
// import {BsTelephone} from 'react-icons/bs'
import {TiMessages} from 'react-icons/ti'

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
                    <h2>For Query</h2>
                    <div className='footer-contact'>
                        <a href='/'>
                            <TiMessages size={20} style={{color: "#E62429"}}/>Message us
                        </a> 
                    </div>
                </div>
                <div className="box">
                    <h2>Pages</h2>
                    <div className='footer-link'>
                        <a href="/">Home</a>
                        <a href="/events">Events</a>
                        <a href="/futuretech1O">Future tech 1.O</a>
                        <a href="/gallery">Gallery</a>
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

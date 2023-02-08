import React from 'react';
import './FooterStyle.css'

const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="box-container">
                <div className="box">
                    <h1>Contact us</h1>
                    <h3>Rahul Tiwari | Tech Head</h3>
                    <p>+91 9324272772</p> 
                    <h3>Abhay Vishwakarma | Event Manager</h3>
                    <p>+91 7738913369</p> 
                    <h3>Mihir Salgaokar | Event Manager</h3>
                    <p>+91 8779330699</p> 
                </div>
                <div className="box">
                    <h3>quick links</h3>
                    <a href="/">home</a>
                    <a href="/events">Events</a>
                    <a href="/teams">Teams</a>
                    <a href="/about">About</a>
                </div>
                <div className="box">
                    <h3>Register Now</h3>
                    <a rel="noreferrer" href="https://forms.gle/TvvUDAobVyMZaxmB8" target="_blank">Register Link</a>
                </div>
                
                <div className="box">
                    <h3>follow us</h3>
                    <a href="https://www.instagram.com/the_future_tech_23/" target="_blank">instagram</a>
                </div>
            </div>
            <h1 className="credit"> Created By <a href="/">KES STUD</a> 2023</h1>
        </div>
        </>
    )
}

export default Footer

import React, {useState} from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import Logo from '../assets/images/logo.png'

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 10){
            setColor(true);
        }else{
            setColor(false);
        }
    }; 
    window.addEventListener("scroll", changeColor);
    return (
        <>
        <div className='marq-tag'>
            <marquee>
            A cash prize and certificate will be awarded to the first place winner, while a certificate will be awarded to all the participants
            </marquee>
        </div>
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/" className='logo'>
                <img src={Logo} alt='logo'/>
                <h1>The Future Tech</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/events">Events</Link>
                </li>
                <li>
                    <Link to="/teams">Team</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <a rel="noreferrer" href="https://forms.gle/TvvUDAobVyMZaxmB8" target="_blank" class="btn header-btn">register</a>
                </li>
                
            </ul>
            <a rel="noreferrer" href="https://forms.gle/TvvUDAobVyMZaxmB8" target="_blank" class="btn header-mobile">register</a>

            <div className='humburger' onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{color: "#000"}
                }/>
                ) : (<FaBars size={20} style={{color: "#000"}
                }/>)}
            </div>
        </div>
        </>
    )
}

export default Navbar

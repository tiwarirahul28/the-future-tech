import React, {useState} from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import Logo from '../assets/images/logo.png'
import PageButton from './PageButton/PageButton';

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
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/" className='logo'>
                <img src={Logo} alt='logo'/>
                {/* <h1>The Future Tech</h1> */}
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/events">Events</Link>
                </li>
                <li>
                    <Link to="/futuretech1O">Future tech 1.O</Link>
                </li>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <PageButton
                        ButtonText="Register"
                    />
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

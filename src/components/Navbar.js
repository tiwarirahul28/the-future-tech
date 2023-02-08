import React, {useState} from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
// import Logo from '../assets/images/Logo-two.png'
// import Logo from '../assets/images/logo.jpg'

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
            <Link to="/">
                {/* <img src={Logo}/> */}
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
                    <a rel="noreferrer" href="https://forms.gle/TvvUDAobVyMZaxmB8" target="_blank" class="btn">register</a>
                </li>
            </ul>
            <div className='humburger' onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{color: "#fff"}
                }/>
                ) : (<FaBars size={20} style={{color: "#fff"}
                }/>)}
            </div>
        </div>
        </>
    )
}

export default Navbar

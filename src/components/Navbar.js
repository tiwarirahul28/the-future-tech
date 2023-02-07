import React, {useState} from 'react'
import "./Navbar.css"
import {FaBars, FaTimes} from 'react-icons/fa';

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
            <a href="/">
                <h1>Portfolio</h1>
            </a>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/events">Events</a>
                </li>
                <li>
                    <a href="/teams">Teams</a>
                </li>
                <li>
                    <a href="/about">About</a>
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

import React, {useState} from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import Logo from '../assets/images/logo.png'
import PageButton from './PageButton/PageButton';
import {AiOutlinePlus} from 'react-icons/ai'

const data =[
    {
        slug :'/',
        text: 'Home',
    },
    {
        text: 'Event',
        icon: <AiOutlinePlus/>,
        subItems: [
            {
             slug: '/eventschedule'   ,
             text: 'Event Schedule',
            }
        ]
    },
    {
        text: '1.O ',
        icon: <AiOutlinePlus/>,
        subItems: [
            {
                slug: '/eventschedule'   ,
                text: 'Event Schedule',
               },
               {
                slug: '/eventschedule'   ,
                text: 'Event Schedule',
               }
        ]
    },
    {
        slug:'/about',
        text:'About',
    }
]
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
            {data.map((item)=>(
                item.slug ? (
                    <li >
                    <Link to={item.slug} onClick={()=> setClick(false)} >{item.text}</Link>
                    </li>
                )
                : (
                    <li>
                    <p>{item.text} { item.icon}</p>
                    
                    <ul className="dropdown-menu">
                    {item.subItems.map((item)=>(
                        <li>
                            <Link to={item.slug} onClick={()=> setClick(false)}>{item.text}</Link>
                        </li>
                    ))} 
                    </ul> 
                    </li>
                )
                    
            ))}
                {/* <li onClick={()=> setClick(false)}>
                    <Link to="/">Home</Link>
                </li>
                <li className='nav-item-dropdown'>
                    <Link to="/events">
                        Events
                        <AiOutlinePlus/>
                    </Link>
                    <ul className="dropdown-menu">
                        <li>
                            <Link to="/eventschedule">Event Schedule</Link>
                        </li>
                    </ul>
                </li>
                <li className='nav-item-dropdown'>
                    <Link to="/futuretech1O">
                        1.O 
                        <AiOutlinePlus/>
                    </Link>
                    <ul className="dropdown-menu">
                        <li>
                            <Link to="/eventschedule">1.O Winner</Link>
                        </li>
                        <li>
                            <Link to="/gallery">1.O Gallery</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li> */}
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
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/images/logo.png";
import PageButton from "./PageButton/PageButton";
import { AiOutlinePlus } from "react-icons/ai";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleClick = () => setClick(!click);

  const changeColor = () => {
    setColor(window.scrollY >= 10);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", changeColor);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" />
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li onClick={() => setClick(false)}>
          <Link to="/">Home</Link>
        </li>

        {isMobile ? (
          <>
            <li onClick={() => setClick(false)}>
              <Link to="/events">1.O Events</Link>
            </li>
            <li onClick={() => setClick(false)}>
              <Link to="/eventschedule">1.O Event Schedule</Link>
            </li>
            <li onClick={() => setClick(false)}>
              <Link to="/team">1.O Team</Link>
            </li>
            <li onClick={() => setClick(false)}>
              <Link to="/gallery">1.O Gallery</Link>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item-dropdown">
              <Link to="#">
                Events <AiOutlinePlus />
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/events">1.O Events</Link>
                </li>
                <li>
                  <Link to="/eventschedule">1.O Event Schedule</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item-dropdown">
              <Link to="/futuretech1O">
                1.O <AiOutlinePlus />
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/team">1.O Team</Link>
                </li>
                <li>
                  <Link to="/gallery">1.O Gallery</Link>
                </li>
              </ul>
            </li>
          </>
        )}

        <li onClick={() => setClick(false)}>
          <Link to="/about">About</Link>
        </li>

        <li>
          <PageButton ButtonText="Register" />
        </li>
      </ul>

      <a
        rel="noreferrer"
        href="https://forms.gle/TvvUDAobVyMZaxmB8"
        target="_blank"
        className="btn header-mobile"
      >
        Register
      </a>

      <div className="humburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#000" }} />
        ) : (
          <FaBars size={20} style={{ color: "#000" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;

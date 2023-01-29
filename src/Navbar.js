import React, { useState, useEffect } from 'react'
import './Navbar.css'
import NavImg from './images/nav-logo.png'

function Navbar() {
  const [show, handleShow] = React.useState(false);
  const [style, setStyle] = useState("closemenu");
  const openMenu = () => {
    setStyle("openmenu");
  }
  const closeMenu = () => {
    setStyle("closemenu");
  }
  const transitionNavBar = () => {
    if (window.scrollY > 50) {
        handleShow(true);
    } else {
        handleShow(false);
    }
  };
  useEffect(() => {
      window.addEventListener("scroll", transitionNavBar);
      return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`navbar ${show && "nav__black"}`}>
        <img className='logo' src={NavImg} alt='Nav-logo'/>
        <ul className={style}>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#portfolio'>Portfolio</a></li>
            <li><a href='#contact'>Contact</a></li>
            <i className="fa-solid fa-xmark" onClick={closeMenu}></i>
        </ul>  
        <i className="fa-solid fa-bars" onClick={openMenu}></i>
    </div>
  )
}

export default Navbar
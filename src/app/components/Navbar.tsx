import React from 'react'
import Style from './Navbar.module.scss'
import { FaBolt } from "react-icons/fa";


const Navbar = () => {
  return (
    <div>
        <nav className={Style.topBar}>
            <div className={Style.logo}>
               JOLT
                <FaBolt></FaBolt></div>
            <div className={Style.navLinks}>
                {/* <a href="/">Home</a>
                <a href="/web-services">Web Services</a>
                <a href="/social-media">Social Media</a> */}
            <a href='#contactForm' className={Style.contact}>Contact</a>
                </div>
        </nav>
    </div>
  )
}

export default Navbar
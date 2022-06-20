import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import Notif from '../assets/notification.svg'
import Avatar from '../assets/avatar.svg'
import CaretDown from '../assets/caret-down.svg'
import Menu from '../assets/menu.svg'
import Close from '../assets/close.svg'
function Navbar(){
    const [isOpen, setClose] = useState(true);

    const handlerClose = () => {
        setClose(false)
    }
    const handlerOpen = () => {
        setClose(true)
    }
    return(
        <nav>
            <div className="navbar">
                <div className="navbar__contents">
                    <div className="navbar__logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className={isOpen ? "navbar__links" : "navbar__links setClose"}>
                        <img onClick={handlerClose} className='close' src={Close} alt="" />
                        <ul>
                                
                                <li><a href="Navbar.js">Home</a></li>
                                <li><a href="Navbar.js">TV Shows</a></li>
                                <li><a href="Navbar.js">Movies</a></li>
                                <li><a href="Navbar.js">News & Popular</a></li>
                                <li><a href="Navbar.js">My List</a></li>
                        </ul>
                    </div>
                        
                </div>
                <div className="navbar__profile">
                    <div className="navbar__notification">
                        <img src={Notif} alt="" />
                    </div>
                    <div className="navbar__avatar">
                        <img src={Avatar} alt="" />
                        <img src={CaretDown} alt="" />
                    </div>
                    <div onClick={handlerOpen} className='navbar-menu-icon'>
                        <img src={Menu} alt="" />
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;
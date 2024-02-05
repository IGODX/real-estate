import React, { useState } from 'react'
import "./navbar.css"

export const Navbar = () => {
    const [isMenuOpened, setMenuOpened] = useState(false);

    const openHamburgerMenu = ()=>{
        setMenuOpened(!isMenuOpened);
    }
  return (
    <div className="container">
   <header className='header'>
   
    <a href="" className='logo'>
        <img src="images/Logo.svg" alt="Logo" />
        <div className='logo-title'>
            <span className='logo-agile'>Agile</span>
            <span>Spaces</span>
        </div>
    </a>
    <div className="burger-menu" onClick={openHamburgerMenu}>
        <img src="images/BurgerMenu.svg" alt="Burger menu" />
    </div>
    <nav className={isMenuOpened ? "nav active" : "nav"}>
        <ul className='nav-items'>
            <li className='nav-item'>
                <a href="" className='nav-link'>HOME</a></li>
            <li className='nav-item'>
                <a href="" className='nav-link'>BOOK OFFICE</a>
            </li>
            <li className='nav-item'>
                <a href="" className='nav-link'>WHO ARE WE</a>
            </li>
            <li className='nav-item'>
                <a href="" className='nav-link'>CONTACT</a>
            </li>
            <li className='nav-item'>
                <button className='button'>Book Office</button>
            </li>
        </ul>
    </nav>
   </header>
   </div>
  )
}

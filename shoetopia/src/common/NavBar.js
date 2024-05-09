import {React, useState, useEffect} from 'react'

import './NavBar.scss'

import logo from '../assets/images/logo.png';
import profilepic from  '../assets/images/profilepic.webp'
import HamburgerMenu from './HamburgerMenu';
import utils from '../utils';

const NavBar = () => {
  const [show, handleShow] = useState(true)

  const navbarAnimation = () => {
    if (window.scrollY > 100) {
      handleShow(true)
    } else {
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", navbarAnimation)
  
    return () => window.removeEventListener("scroll", navbarAnimation)
  }, [])
  
  return (
    <div className={`navbarWrapper ${show && "navfadein"}`}>
      <img className='logo' src={logo} alt=''></img>
      {!utils.isMobile() &&
      <div className='navbarLinks'>
        <div>Mens</div>
        <div>Womens</div>
        <div>Kids</div>
      </div> }
      <div className='profile'>
        {utils.isMobile() ? <HamburgerMenu></HamburgerMenu> :  <img className='profilepic' src={profilepic} alt=''></img>}        
      </div>
    </div>
  )
}

export default NavBar
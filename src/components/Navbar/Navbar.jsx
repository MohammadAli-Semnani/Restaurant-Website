import React, { useState } from 'react';

import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineRestaurantMenu } from "react-icons/md"

import images from "../../constants/images"
import "./Navbar.css"


const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [animateStatus, setanimateStatus] = useState(true)

  const hamburgerMenuHandler = () => {
    setToggle(true)
    setanimateStatus(true)
  }
  const OutlineRestaurantMenuHandler = () => {
    setToggle(false)
    setanimateStatus(false)
  }
  console.log(animateStatus)
  return (
    <nav className='app__navbar'>

      <div className='app__navbar-logo'>
        <img src={images.gericht} alt='logo' />
      </div>

      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#'>Home</a></li>
        <li className='p__opensans'><a href='#'>About</a></li>
        <li className='p__opensans'><a href='#'>Menu</a></li>
        <li className='p__opensans'><a href='#'>Awards</a></li>
        <li className='p__opensans'><a href='#'>Contact</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a href='#' className='p__opensans'>login / Register</a>
        <div/>
        <a href='/' className='p__opensans'> Book Table</a>
      </div>
      
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={hamburgerMenuHandler} cursor="pointer"/>
        {toggle &&
          <div className={`app__navbar-smallscreen_overlay flex__center ${animateStatus ? "slide-bottom" : "slide-top"} `}  >
          <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={OutlineRestaurantMenuHandler}/>
          <ul className='app__navbar-smallscreen-links'>
            <li className='p__opensans'><a href='#'>Home</a></li>
            <li className='p__opensans'><a href='#'>About</a></li>
            <li className='p__opensans'><a href='#'>Menu</a></li>
            <li className='p__opensans'><a href='#'>Awards</a></li>
            <li className='p__opensans'><a href='#'>Contact</a></li>
          </ul>
        </div>
        }
      </div>

    </nav>
  );
};

export default Navbar;
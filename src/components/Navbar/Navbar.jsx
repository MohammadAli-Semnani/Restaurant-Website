import React from 'react';

// import { GiHamburgerMenu } from "react-icon/gi"
// import { MdOutlineRestaurantMenu } from "react-icon/md"

import images from "../../constants/images"
import "./Navbar.css"


const Navbar = () => {
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
      
    </nav>
  );
};

export default Navbar;
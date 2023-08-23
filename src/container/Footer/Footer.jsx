import React from 'react';

import './Footer.css';
import { FiFacebook, FiTwitter, FiInstagram} from "react-icons/fi"
import { FooterOverlay, Newsletter } from "../../components"
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />
    
    <div className='app__footer-links'>

      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>9 W 53rd St, NewYork, NY 10019, USA</p>
        <p className='p__opensans'>+1 212-344-1230</p>
        <p className='p__opensans'>+1 212-555-1230</p>
      </div>

      <div className='app__footer-link_logo'>
        <img src={images.gericht} alt="logo" />
        <p className='p__opensans'>"The Best Way To Find Yourself is to Lose Yourself in the service of other."</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop:"2rem"}} />
        <div className='app__footer-links_icons'>
            <FiFacebook/>
            <FiInstagram/>
            <FiTwitter/>

        </div>
      </div>

      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>monday-Friday:</p>
        <p className='p__opensans'>08:00 am-12:00 am</p>
        <p className='p__opensans'>Saturday-sunday:</p>
        <p className='p__opensans'>07:00 am-11:00 am</p>
      </div>
    </div>


    <div className='app__copyriht'>
      <p className='p__opensans'>2023 Gericht. All Rights Reserved</p>
    </div>

  </div>
);

export default Footer;

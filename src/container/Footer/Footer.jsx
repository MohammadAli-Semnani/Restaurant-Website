import React from 'react';

import './Footer.css';
import { FiFacebook, FiTwitter, FiInstagram} from "react-icons/fi"
import { FooterOverlay, Newsletter } from "../../components"

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter/>
  </div>
);

export default Footer;

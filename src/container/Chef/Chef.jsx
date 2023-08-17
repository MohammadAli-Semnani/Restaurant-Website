import React from 'react';

import './Chef.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';
const Chef = () => {
  return (
    <div className='app__wrapper app__bg section__padding'>
      <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.chef} alt="chef" />
      </div>
      <div className='app__wrapper_info'>

        <SubHeading title="Chef's Word"/>
        <h1 className='headtext__cormorant'>what belive in </h1>

        
        <div className='app__chef-content'>

          
          <div className='app__chef-content-quote'>
            <img src={images.quote} alt="quote" />
            <p className='p__opensans'>
            Ducimus minus assumenda, culpa impedit qui quam suscipit error magnam quibusdam corporis quasi, fugit incidunt.</p> 
          </div>

          <p className='p__opensans'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus minus assumenda, culpa impedit qui quam suscipit error magnam quibusdam corporis quasi, fugit incidunt. Minima voluptatibus facilis architecto quod impedit! Provident.
          </p>


        </div>

        
        <div className='app__chef-sign'>
          <p>Kevin Lou</p>
          <p className='p__opensan'>
            Chef & Founder
          </p>
          <img src={images.sign} alt="sign" />
        </div>


      </div>
    </div>
  );
};

export default Chef;
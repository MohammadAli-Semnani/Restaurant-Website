import React from 'react';

import './Laurels.css';
import { images, data } from '../../constants';
import { SubHeading } from '../../components';


const AwardCard = ({ awards: {title, imgUrl, subtitle } }) => (
  <div className='app__laurels_award_card'>
    <img src={imgUrl} alt="award" />
    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{color:"#DCCA87"}}>{ title }</p>
      <p className='p__cormorant' >{ subtitle }</p>
    </div>
  </div>
)


const Laurels = () => {

  return (
    <>
      <div className='app__bg app__wrapper section__padding'>
        <div className='app__wrapper_info'>
          <div className='app__logo'>
            <img src={images.logo} alt="logo" />
          </div>
          <SubHeading title="awards & recognition"/>
          <h1 className='headtext__cormorant'>Our Laurels</h1>
          <div className='app__laurels_awards'>
            {data.awards.map(award => <AwardCard key={award.title} awards={award} />)}
          </div>
        </div>

        <div className='app__wrapper_img'>
          <img src={images.laurels} alt="laurels"/>
        </div>
      </div>
    </>
  );
};

export default Laurels;
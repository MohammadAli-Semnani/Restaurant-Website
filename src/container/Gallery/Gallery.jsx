import React from 'react';
import './Gallery.css';
 import SubHeading from "../../components/SubHeading/SubHeading"
const Gallery = () => {
  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title="Instagram"/>
        <h1 className='headtext__cormorant'>
            Photo Gallary
        </h1>
        <p className='p__opensans' style={{color:"#AAA" , marginTop:"2rem"}}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus molestias optio nulla reiciendis, qui atque, quibusdam veniam aliquid esse quis nemo iste in consequuntur, et laudantium velit. Nemo, a provident.
          Suscipit quia voluptas perspiciatis! Tempore, at asperiores? Quam exercitationem ipsam repellendus, enim aut ut labore numquam nihil, harum dolore omnis autem nesciunt ex eius officia nam. Ipsam cum odio maiores.
        </p>
        <button className='custom__button'>View More </button>

      </div>
      <div className='app__gallary-images'>
        <div className='app__gallary_container'>
          
        </div>
      </div>
    </div>
  );
};

export default Gallery;
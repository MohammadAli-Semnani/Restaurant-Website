import React from 'react';
import './Gallery.css';
import SubHeading from "../../components/SubHeading/SubHeading"
 

import {BsArrowLeftShort,BsArrowRightShort, BsInstagram} from "react-icons/bs"
import { images } from '../../constants';
const Gallery = () => {

  const scrollRef = React.useRef()
  // console.log(scrollRef.current);

  const { gallery01, gallery02, gallery03, gallery04 } = images;
  const galleryImages = [gallery01, gallery02, gallery03, gallery04]

  const scroll = (direction) => {
    const {current} = scrollRef

    if (direction === "left") {
        current.scrollLeft -= 300
    } else {
        current.scrollLeft += 300
      }
  }

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title="Instagram"/>
        <h1 className='headtext__cormorant'>
            Photo gallery
        </h1>
        <p className='p__opensans' style={{color:"#AAA" , marginTop:"2rem"}}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus molestias optio nulla reiciendis, qui atque, quibusdam veniam aliquid esse quis nemo iste in consequuntur, et laudantium velit. Nemo, a provident.
          Suscipit quia voluptas perspiciatis! Tempore, at asperiores? Quam exercitationem ipsam repellendus, enim aut ut labore numquam nihil, harum dolore omnis autem nesciunt ex eius officia nam. Ipsam cum odio maiores.
        </p>
        <button className='custom__button'>View More </button>

      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery-image-${index + 1}`}>
              <img src={image} alt="gallery" />
              <BsInstagram className='gallery__icon-image'/>
            </div>
        ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=>scroll("left")}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={()=>scroll("right")}/>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
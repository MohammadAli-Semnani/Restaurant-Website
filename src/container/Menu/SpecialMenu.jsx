import React from 'react';
import './SpecialMenu.css';

import {images, data} from "../../constants"
import { MenuItem, SubHeading } from '../../components';

const SpecialMenu = () => {
  return (
    <div className='app__specialMenu flex__center section__pading' id='menu'>
      <div className='app__specialMenu-title'>
        <SubHeading title="Menu that fits you pallate" />
        <h1 className='headtext__cormorant'>Today's Special</h1>
      </div>

      <div className='app__specialMenu-menu'>

        <div className='specialMenu-menu_wine flex__center'>
          <p className='app__specialMenu_menu_heading'>Wine & beer</p>
          <div className='app__specialMenu_menu_item'>
            {data.wines.map((wine, index) => (
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />             
            ))}
          </div>
        </div>
        
        <div className='app__specialMenu-menu_img'>
          <img src={images.menu} alt="menu" />
        </div>
        
          <div className='specialMenu-menu_cocktails flex__center'>
          <p className='app__specialMenu_menu_heading'>cocktails</p>
          <div className='app__specialMenu_menu_item'>
            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />             
            ))}
          </div>
        </div>

      </div>

      <div style={{ marginTop: "15px" }}>
        <button type='button' className='custom__button' >View More</button>
      </div>

    </div>
  );
};

export default SpecialMenu;
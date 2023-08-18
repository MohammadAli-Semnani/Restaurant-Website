import React, { useRef, useState } from 'react';
import './Intro.css';

import {BsFillPlayFill, BsPauseFill} from "react-icons/bs"
import { meal } from "../../constants"
 
const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const vidRef = useRef()

  const videoHandler = () => {
    setPlayVideo(prevState => !prevState)

    if (playVideo) {
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }


  }
  return (
    <div className='app__video'>
      <video
        src={meal}
        type='video/mp4'
        loop
        ref={vidRef}
        muted
        controls={false}
      />
      <div className='app__video-overlay flex__center'>
        <div className='app__video-overlay_circle flex__center' onClick={videoHandler}>
          {playVideo
            ? (<BsFillPlayFill color="#fff" fontSize={30} />)
            : <BsPauseFill color="#fff" fontSize={30} />
          }
        </div>
      </div>
    </div>
  );
};

export default Intro;
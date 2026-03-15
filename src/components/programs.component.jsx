import { useEffect } from 'react';

import '../App.css';
import '../styles/programs.css';

function Programs() {
  return (
    <>
      <title>Programs | Burlington Track and Field Club</title>
      <meta name="description" content="Discover the diverse programs offered by Burlington Track and Field, catering to runners of all levels and ages. From training sessions to competitive events, find your perfect fit with us today!"/>
      <div className="programsRow">
        <h1 className='programTitle'>BTFC PROGRAMS</h1>
        <p className='description'>The Burlington Track and Field Club offers both Junior and Senior programs. Specialized distance and sprint programs are offered at the senior level.  Please see the links below for more details.<br/><br/></p>
        
        <div className='buttonRow'>
          <a href='/junior/' className='programButton'>JUNIOR GROUP</a>
          <a href='/distance/'className='programButton'>SENIOR DISTANCE</a>
          <a href='/sprint/'className='programButton'>SENIOR SPRINT</a>
        </div>
      </div>
    </>
  )
}

export default Programs

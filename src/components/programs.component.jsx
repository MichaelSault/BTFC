import { useEffect } from 'react';

import '../App.css';
import '../styles/programs.css';

import racePacket from '../assets/racePackets/Ken Lake invite 2026.pdf';

function Programs() {
  return (
    <>
      <title>Programs | Burlington Track and Field Club</title>
      <meta name="description" content="Discover the diverse programs offered by Burlington Track and Field, catering to runners of all levels and ages. From training sessions to competitive events, find your perfect fit with us today!"/>
      
      <div className="programsRow">
        <div className="alert">
          <span className="closebtn" onClick={(e) => {e.target.parentElement.style.display="none";}}>&times;</span> 
          <strong><b>2027 Full Year Registration will open live on Nov. 28.</b></strong>
          <hr/>
          <p>Important Note: If you wish to register for the full year, you are <b>committing to full attendance throughout all training seasons: indoor, outdoor, and fall.</b> If you cannot commit to the full year please wait and register by seaon. Indoor Only registration will open mid December.</p>
          <br/>
          
          {/* <a className='whiteText' target="_blank" href='https://www.trackie.com/event/ken-lake-memorial-x-country-meet/1038859/'><b><i>REGISTER HERE</i></b></a> */}
          <br/>
        </div>
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

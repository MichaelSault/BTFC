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
          <strong><b>Registration Updates: Cross Country Season</b></strong>
          <hr/>
          <p>Fall Registration is now closed.  Please check back in November for 2027 Registrations.</p>
          {/* <a className='whiteText' target="_blank" href='https://www.trackie.com/club/2026-burlington-track-field-club-fall-xc/1031234/'><b><i>REGISTER HERE</i></b></a> */}
          <br/>
          <p>Ken Lake Memorial Meet registration is now open.</p>
          <a className='whiteText' target="_blank" href='https://www.trackie.com/event/ken-lake-memorial-x-country-meet/1038859/'><b><i>REGISTER HERE</i></b></a>
          <br/>
          <a className='whiteText' target="_blank" href={racePacket}><b><i>MEET PACKAGE</i></b></a>
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

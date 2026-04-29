import { useEffect } from 'react';

import '../App.css';
import '../styles/programs.css';

function Programs() {
  return (
    <>
      <title>Programs | Burlington Track and Field Club</title>
      <meta name="description" content="Discover the diverse programs offered by Burlington Track and Field, catering to runners of all levels and ages. From training sessions to competitive events, find your perfect fit with us today!"/>
      
      <div className="programsRow">
        <div className="alert">
          <span className="closebtn" onClick={(e) => {e.target.parentElement.style.display="none";}}>&times;</span> 
          <strong>Jr. Registration Update: Outdoor Season At Full Capacity</strong> <br/><br/>
          Unfortunately, registration for our <b>Outdoor Season</b> filled up much faster than expected. We have already taken on more members than initially anticipated and, as a result, we are <b>strictly at full capacity.  Note:</b> We are unable to accept any late registrations at this time.<br/><br/>
          If you missed out this time, we would love to have you join us for our upcoming <b>Cross Country Season.</b> Registration Opens: August 4 (Pending availability)<br/><br/>
          Thank you for your incredible interest and support of our programs!
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

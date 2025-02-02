import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import '../App.css';
import '../styles/bod.css';

import ContactImage from '../assets/contact.png';


function Directors() {
  const navigate = useNavigate();

  return (
    <>
        <div className="directorsRow desktopOnly">
            <h4>Board of Directors</h4>
            <div className="directorsCol">
              <h6>Our board of directors helps ensure that the club is able to operate and is equipped tp provide the best experience for our athletes.</h6>
              <p><b>President</b> - Gustav Karlsson</p>
              <p><b>Athletic Director</b> - Scott Douglas</p>
              <p><b>Treasurer</b> - Angus Shuttleworth</p>
              <p><b>Secretary</b> - Danielle Leahy Laughlin</p>
              <p><b>Director</b> - Nirup Urs</p>
              <p><b>Director</b> - Heather Larson</p>
              <p><b>Director</b> - JC Castellanos</p>
              <p><b>Director</b> - David Parkes</p>
              <p><b>Head Coach</b> - Tammy MacKenzie</p>
            </div>
            <div className="directorsPhotoCol">
              <img src={ContactImage} />
              <h6 className='contactSubText'><i>Caption text for the above image.</i></h6>
            </div>
        </div>
                
    </>
  )
}

export default Directors

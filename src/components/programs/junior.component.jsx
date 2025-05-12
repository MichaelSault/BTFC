import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import '../../styles/teams.css';

import Footer from "../socialFooter.component";

import JuniorImage from "../../assets/juniorTeam.jpeg";

function Junior() {
  const navigate = useNavigate();

  return (
    <>
      <div className="teamRow">
        <div className="teamImageCol">
          <img className="teamImage" src={JuniorImage}/>
        </div>
      
        <div className="teamTextCol">
          <div className="teamTextSubCol">

            <h1 className="teamName">JUNIOR TRACK AND FIELD/CROSS COUNTRY</h1>
            <p className="teamText"><b>Ages:</b> 6 to 13</p>
            <p className="teamText"><b>Distances:</b> All</p>
            <p className="teamText"><b>Experience Level:</b> All levels welcome</p>
            <p className="teamText"><b>Training:</b> 1-2 days per week</p>
            <p className="teamText"><b>Training Days:</b></p>
              <ul className="teamText">
                <li><b>Indoor:</b> Monday and Wednesday</li>
                <li><b>Outdoor:</b> Monday and Thursday</li>
                <li><b>Cross Country:</b> Monday and Thursday</li>
              </ul>
            <p className="teamText"><b>Racing:</b> Meets are on some weekends, schedule to come.</p>

            <a href='https://www.trackie.com/club/2025-burlington-track-field-club-outdoor-only-waitlist/1018740/' className='teamButton'>REGISTER</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Junior

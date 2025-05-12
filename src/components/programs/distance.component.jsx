import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import '../../styles/teams.css';

import Footer from "../socialFooter.component";

import DistanceImage from "../../assets/distanceTeam.jpeg";

function Distance() {
  const navigate = useNavigate();

  return (
    <>
      <div className="teamRow">
        <div className="teamImageCol">
          <img className="teamImage" src={DistanceImage}/>
        </div>
      
        <div className="teamTextCol">
          <div className="teamTextSubCol">
            <h1 className="teamName">SENIOR DISTANCE TEAM</h1>
            <p className="teamText"><b>Ages:</b> Highschool age and up</p>
            <p className="teamText"><b>Distances:</b> Middle and Long distance (800m and up)</p>
            <p className="teamText"><b>Experience Level:</b> Should be able to run at least 4km</p>
            <p className="teamText"><b>Training:</b> 2-3 days per week</p>
            <p className="teamText"><b>Training Days:</b></p>
            <ul className="teamText">
              <li>Monday and Wednesday evenings</li>
              <li>Saturday mornings</li>
            </ul>
            <p className="teamText"><b>Racing:</b> Meets are on some weekends, schedule to come.</p>

            <a href='https://www.trackie.com/club/2025-burlington-track-field-club-outdoor-only-waitlist/1018740/' className='teamButton'>REGISTER</a>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Distance

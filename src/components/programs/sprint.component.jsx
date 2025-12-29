import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import '../../styles/teams.css';


import Footer from "../socialFooter.component";

import SprintImage from "../../assets/sprintTeam.jpeg";


function Sprint() {
  const navigate = useNavigate();

  return (
    <div className="teamRow">
      <div className="teamImageCol">
        <img className="teamImage" src={SprintImage}/>
      </div>
    
      <div className="teamTextCol">
        <div className="teamTextSubCol">

          <h1 className="teamName">SENIOR SPRINT TEAM</h1>
          <p className="teamText"><b>Ages:</b> Highschool age and up</p>
          <p className="teamText"><b>Distances:</b> Sprint up to 400m</p>
          <p className="teamText"><b>Experience Level:</b> All levels welcome</p>
          <p className="teamText"><b>Training:</b> 2-3 days per week</p>
          <p className="teamText"><b>Training Days:</b></p>
          <ul className="teamText">
            <li>Monday and Wednesday evenings</li>
            <li>Saturday mornings</li>
          </ul>
          
          <p className="teamText"><b>Seasons:</b></p>
          <ul className="teamText">
            <li>January - April: <i>Indoor Training</i></li>
            <li>May - August: <i>Outdoor Training</i></li>
            <li>September - December: <i>Outdoor and Indoor Training</i></li>
          </ul>

          <p className="teamText"><b>Racing:</b> Meets are on some weekends, schedule to come.</p>

          <a href='https://www.trackie.com/club/2025-burlington-track-field-club-outdoor-only-waitlist/1018740/' className='teamButton'>REGISTER</a>
        </div>
      </div>
    </div>
  )
}

export default Sprint

import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import '../../styles/teams.css';


import Footer from "../socialFooter.component";

import SprintImage from "../../assets/ProgramImage.png";


function Sprint() {
  const navigate = useNavigate();

  return (
    <div className="teamRow">
      <div className="teamImageCol">
        <img className="teamImage" src={SprintImage}/>
      </div>
    
      <div className="teamTextCol">
        <h1 className="teamName">SENIOR SPRINT TEAM</h1>
        <p className="teamText"><b>Ages:</b> Highschool age and up</p>
        <p className="teamText"><b>Distances:</b> Sprint up to 400m</p>
        <p className="teamText"><b>Experience Level:</b> All levels welcome</p>
        <p className="teamText"><b>Training:</b> 2-3 days per week</p>
        <p className="teamText"><b>Training Days:</b></p>
        <p className="teamText"><b>Racing:</b> Meets are on some weekends, schedule to come.</p>

        <a className='teamButton'>REGISTER</a>
      </div>
    </div>
  )
}

export default Sprint

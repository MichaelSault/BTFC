import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import '../App.css'


function Programs() {
  const navigate = useNavigate();

  return (
    <>
        <div className="programsRow">
            <h1 className="title">Programs</h1>
        </div>

        <div className="programsRow">
          <div className="programsCol">
            
          </div>
        </div>
                
    </>
  )
}

export default Programs

import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import '../App.css'


function Registration() {
  const navigate = useNavigate();

  return (
    <>
        <div className="registrationRow">
            <h1 className="title">Registration</h1>
        </div>
                
    </>
  )
}

export default Registration

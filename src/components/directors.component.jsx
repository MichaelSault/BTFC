import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import '../App.css'


function Directors() {
  const navigate = useNavigate();

  return (
    <>
        <div className="directorsRow desktopOnly">
            <h4>Board of Directors</h4>
        </div>
                
    </>
  )
}

export default Directors

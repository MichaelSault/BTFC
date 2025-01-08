import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import '../App.css'


function Results() {
  const navigate = useNavigate();

  return (
    <>
        <div className="resultsRow">
            <h1 className="title">Race Results</h1>
        </div>
                
    </>
  )
}

export default Results

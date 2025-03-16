import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import '../../App.css';

import Footer from "../socialFooter.component";


function grResults() {
  const navigate = useNavigate();

  return (
    <>
      <div className='grRow desktopOnly'>
        <div className='grResultsCol2'>
          <h1 className="grResultText">GORD RUSBY</h1>
          <h1 className="grResultText">MEMORIAL MEET</h1>
          <h4 className="grResultSubText">TRACK AND FIELD</h4>
        </div>
        <div className='grResultCol'>
          <a className='grResultButton'>2024 RESULTS</a>
          <a className='grResultButton'>2023 RESULTS</a>
          <a className='grResultButton'>2022 RESULTS</a>
          <a className='grResultButton'>2019 RESULTS</a>
          <a className='grResultButton'>2018 RESULTS</a>
        </div>
      </div>

      <div className='grRow mobileOnly'>
        <div className='grResultCol'>
          <a className='grResultButton'>2024 RESULTS</a>
          <a className='grResultButton'>2023 RESULTS</a>
          <a className='grResultButton'>2022 RESULTS</a>
          <a className='grResultButton'>2019 RESULTS</a>
          <a className='grResultButton'>2018 RESULTS</a>
        </div>
      </div>
    </>
  )
}

export default grResults

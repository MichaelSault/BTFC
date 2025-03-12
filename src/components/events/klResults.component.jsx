import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import '../../App.css';

import Footer from "../socialFooter.component";


function klResults() {
  const navigate = useNavigate();

  return (
    <>
      <div className='klRow desktopOnly'>
        <div className='klResultsCol2'>
          <h1 className="klResultsText">KEN LAKE</h1>
          <h1 className="klResultsText">MEMORIAL MEET</h1>
          <h3 className="klResultsSubText">CROSS COUNTRY</h3>
        </div>
        <div className='klCol'>
          <a className='klButton'>2024 RESULTS</a>
          <a className='klButton'>2023 RESULTS</a>
          <a className='klButton'>2022 RESULTS</a>
          <a className='klButton'>2021 RESULTS</a>
          <a className='klButton'>2019 RESULTS</a>
          <a className='klButton'>2018 RESULTS</a>
        </div>
      </div>

      <div className='klRow mobileOnly'>
        <div className='klBanner'>
          <h1 className='klTitle'>KEN LAKE MEET</h1>
        </div>
        <div className='klCol'>
          <p className='resultDescription'>Every year, the Burlington Track and Field Club hosts the Gord Rusby Memorial Meet during the Outdoor Track season.</p>
          <div className='buttonRowKL'>
            <a className='klButton'>RESULTS</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default klResults
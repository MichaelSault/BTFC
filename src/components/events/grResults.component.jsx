import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import '../../App.css';

import Footer from "../socialFooter.component";

import gr2018 from '../../assets/results/2018 Gord Rusby Memorial Meet Results.pdf';
import gr2019 from '../../assets/results/2019 Gord Rusby Memorial Meet Results.pdf';
import gr2022 from '../../assets/results/2022 Gord Rusby Memorial Meet Results.pdf';
import gr2023 from '../../assets/results/2023 Gord Rusby Memorial Meet Results.pdf';

function grResults() {
  const navigate = useNavigate();

  return (
    <>
      <div className='grRow desktopOnly'>
        <div className='grResultCol2'>
          <h1 className="grResultText">GORD RUSBY</h1>
          <h1 className="grResultText">MEMORIAL MEET</h1>
          <h4 className="grResultSubText">TRACK AND FIELD</h4>
        </div>
        <div className='grResultCol'>
          <a href='https://www.sportmadesimple.com/results/BurlingtonTrack/GR2025/index.html' className='grResultButton'>2025 RESULTS</a>
          <a href='https://sportmadesimple.com/results/GordRusby2024/index.html' className='grResultButton'>2024 RESULTS</a>
          <a href={gr2023} className='grResultButton'>2023 RESULTS</a>
          <a href={gr2022} className='grResultButton'>2022 RESULTS</a>
          <a href={gr2019} className='grResultButton'>2019 RESULTS</a>
          <a href={gr2018} className='grResultButton'>2018 RESULTS</a>
        </div>
      </div>

      <div className='grRow mobileOnly'>
        <div className='grResultCol'>
          <h1 className="grTitle">GORD RUSBY</h1>
          <a href='https://www.sportmadesimple.com/results/BurlingtonTrack/GR2025/index.html' className='grResultButton'>2025 RESULTS</a>
          <a href='https://sportmadesimple.com/results/GordRusby2024/index.html' className='grResultButton'>2024 RESULTS</a>
          <a href={gr2023} className='grResultButton'>2023 RESULTS</a>
          <a href={gr2022} className='grResultButton'>2022 RESULTS</a>
          <a href={gr2019} className='grResultButton'>2019 RESULTS</a>
          <a href={gr2018} className='grResultButton'>2018 RESULTS</a>
        </div>
      </div>
    </>
  )
}

export default grResults

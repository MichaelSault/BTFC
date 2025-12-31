import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

import '../../App.css';

import Footer from "../socialFooter.component";

import kl2018 from '../../assets/results/KEN LAKE X-COUNTRY RESULTS 2018.pdf';
import kl2019 from '../../assets/results/KEN LAKE X-COUNTRY RESULTS 2019.pdf';
import kl2021 from '../../assets/results/KEN LAKE X-COUNTRY RESULTS 2021.pdf';
import kl2022 from '../../assets/results/KEN LAKE X-COUNTRY RESULTS 2022.pdf';
import kl2023 from '../../assets/results/KEN LAKE X-COUNTRY RESULTS 2023.pdf';
import kl2024 from '../../assets/results/KEN LAKE X-COUNTRY RESULTS 2024.pdf';
import kl2025 from '../../assets/results/KEN LAKE X-COUNTRY RESULTS 2025.pdf';

function klResults() {
  const navigate = useNavigate();

  return (
    <>
      <title>Race Results | Burlington Track & Field Club</title>
      <meta name='description' content="Stay updated with the latest race results from Burlington Track & Field Clubs's anual Ken Lake Memorial Cross Country Meet"/>
      <div className='klRow desktopOnly'>
        <div className='klResultCol2'>
          <h1 className="klResultText">KEN LAKE</h1>
          <h1 className="klResultText">MEMORIAL MEET</h1>
          <h4 className="klResultSubText">CROSS COUNTRY</h4>
        </div>
        <div className='klResultCol'>
          <a href={kl2025} target="_blank" className='klResultButton'>2025 RESULTS</a>
          <a href={kl2024} target="_blank" className='klResultButton'>2024 RESULTS</a>
          <a href={kl2023} target="_blank" className='klResultButton'>2023 RESULTS</a>
          <a href={kl2022} target="_blank" className='klResultButton'>2022 RESULTS</a>
          <a href={kl2021} target="_blank" className='klResultButton'>2021 RESULTS</a>
          <a href={kl2019} target="_blank" className='klResultButton'>2019 RESULTS</a>
          <a href={kl2018} target="_blank" className='klResultButton'>2018 RESULTS</a>
        </div>
      </div>

      <div className='klRow mobileOnly'>
        <div className='klResultCol'>
          <h1 className="klResultTitle">KEN LAKE</h1>
          <a href={kl2025} target="_blank" className='klResultButton'>2025 RESULTS</a>
          <a href={kl2024} target="_blank" className='klResultButton'>2024 RESULTS</a>
          <a href={kl2023} target="_blank" className='klResultButton'>2023 RESULTS</a>
          <a href={kl2022} target="_blank" className='klResultButton'>2022 RESULTS</a>
          <a href={kl2021} target="_blank" className='klResultButton'>2021 RESULTS</a>
          <a href={kl2019} target="_blank" className='klResultButton'>2019 RESULTS</a>
          <a href={kl2018} target="_blank" className='klResultButton'>2018 RESULTS</a>
        </div>
      </div>
    </>
  )
}

export default klResults
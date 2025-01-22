import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import '../App.css'
import '../styles/results.css';

import ContactImage from '../assets/contact.png';



function Results() {
  const navigate = useNavigate();

  return (
    <>
      <div className='resultsRow'>
        <div className='resultsQuestionsCol'>
            <div className='resultsTitleSubCol'>
                <h1 className='resultsTitle'>Gord Rusby Memorial Meet</h1>
                <hr className='hrResults'/>
                
                <div className='resultsInfoSubCol'>
                  <h5>This is our annual track and field meet in memorial to Gord Rusby</h5>
                  <h4>2024 Results</h4>
                  <h4>2023 Results</h4>
                  <h4>2022 Results</h4>
                  <h4>2021 Results</h4>
                  <h4>2020 Results</h4>
                </div>
            </div>
        </div>
        <div className='resultsPhotoCol'>
          <img src={ContactImage} />
          <h6 className='resultsSubText'><i>Gord Rusby Memorial Meet (July 2024)</i></h6>
        </div>
      </div>

      <div className='resultsRow'>
        <div className='resultsPhotoCol'>
            <img src={ContactImage} />
            <h6 className='resultsSubText'><i>Ken Lake Memorial Meet (October 2024)</i></h6>
        </div>
        <div className='resultsQuestionsCol'>
            <div className='resultsTitleSubCol'>
                <h1 className='resultsTitle'>Ken Lake Memorial Meet</h1>
                <hr className='hrResults'/>
                
                <div className='resultsInfoSubCol'>
                  <h5>This is our annual track and field meet in memorial to Gord Rusby</h5>
                  <h4>2024 Results</h4>
                  <h4>2023 Results</h4>
                  <h4>2022 Results</h4>
                  <h4>2021 Results</h4>
                  <h4>2020 Results</h4>
                </div>
            </div>
        </div>
      </div>
                
    </>
  )
}

export default Results

import {useEffect} from 'react';

import '../App.css'
import '../styles/results.css';

import GordRusby from './gordRusby.component';
import KenLake from './kenLake.component';

function Results() {
  

  return (
    <>
      <title>Race Results | Burlington Track & Field Club</title>
      <meta name='description' content='Stay updated with the latest race results from Burlington Track & Field. Explore our comprehensive listings to track your progress and celebrate achievements. Visit us now!'/>
      <GordRusby/>
      <KenLake/>
    </>
  )
}

export default Results

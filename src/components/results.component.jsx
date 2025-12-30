import {useEffect} from 'react';

import '../App.css'
import '../styles/results.css';

import GordRusby from './gordRusby.component';
import KenLake from './kenLake.component';

function Results() {
  useEffect(() => {
    document.title = 'Race Results | Burlington Track & Field Club';
  });

  return (
    <>
      <GordRusby/>
      <KenLake/>
    </>
  )
}

export default Results

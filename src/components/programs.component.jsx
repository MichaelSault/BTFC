import { useEffect } from 'react';

import '../App.css';
import '../styles/programs.css';

function Programs() {
  useEffect(() => {
    document.title = 'Programs | Burlington Track & Field Club';
  });

  return (
    <>
        <div className="programsRow">
          <h1 className='programTitle'>BTFC PROGRAMS</h1>
          <p className='description'>The Burlington Track and Field Club offers a number of different programs depending on age and event distance.</p>
          <div className='buttonRow'>
            <a href='/#/Junior/' className='programButton'>JUNIOR</a>
            <a href='/#/Distance/'className='programButton'>DISTANCE</a>
            <a href='/#/Sprint/'className='programButton'>SPRINT</a>
          </div>
        </div>
    </>
  )
}

export default Programs

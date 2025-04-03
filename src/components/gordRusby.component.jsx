import '../App.css';
import '../styles/gordrusby.css';

import eventPhoto from '../assets/gordrusby.jpg';

function GordRusby() {

  return (
    <>
        <div className='grRow desktopOnly'>
            <div className='grCol'>
                <h1 className='grTitle'>GORD RUSBY MEMORIAL MEET</h1>
                <p className='resultDescription'>Every year, the Burlington Track and Field Club hosts the Gord Rusby Memorial Meet during the Outdoor Track season.</p>
                <div className='buttonRowGR'>
                  <a href='/#/GordRusby' className='grButton'>RESULTS</a>
                </div>
            </div>
            <div className='grCol2'>
              <div className='outerwrapperGR'>
                <div className='innerwrapperGR'>
                </div>
              </div>
            </div>
        </div>

        <div className='grRow mobileOnly'>
          <div className='grCol'>
          <h1 className='grTitle'>GORD RUSBY MEMORIAL MEET</h1>
          <img className='eventImage' src={eventPhoto} />
            <p className='resultDescription'>Every year, the Burlington Track and Field Club hosts the Gord Rusby Memorial Meet during the Outdoor Track season.</p>
            <div className='buttonRowGR'>
              <a href='/#/GordRusby' className='grButton'>RESULTS</a>
            </div>
            <hr/>
          </div>
        </div>
    </>
  )
}

export default GordRusby

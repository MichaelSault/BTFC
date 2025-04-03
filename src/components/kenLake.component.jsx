import '../App.css';
import '../styles/kenlake.css';

import eventPhoto from '../assets/kenlake.jpg';

function KenLake() {


  return (
    <>
      <div className='klRow desktopOnly'>
        <div className='klCol2'>
          <div className="outerwrapperKL">
            <div className='innerwrapperKL'>
              
            </div>
          </div>
        </div>
        <div className='klCol'>
          <h1 className='klTitle'>KEN LAKE MEMORIAL MEET</h1>
          <p className='resultDescription'>Every year, the Burlington Track and Field Club hosts the Ken Lake Memorial Meet during the Cross Country season.</p>
          <div className='buttonRowKL'>
            <a href='/#/KenLake' className='klButton'>RESULTS</a>
          </div>
        </div>
      </div>

      <div className='klRow mobileOnly'>
        <div className='klCol'>
          <h1 className='klTitle'>KEN LAKE MEMORIAL MEET</h1>
          <img className='eventImage' src={eventPhoto} />
          <p className='resultDescription'>Every year, the Burlington Track and Field Club hosts the Gord Rusby Memorial Meet during the Outdoor Track season.</p>
          <div className='buttonRowKL'>
            <a href='/#/KenLake' className='klButton'>RESULTS</a>
          </div>
        </div>
      </div>
    </>
  )
}


export default KenLake

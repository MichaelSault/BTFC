import '../App.css';
import '../styles/kenlake.css';

import eventPhoto from '../assets/kenLake.jpeg';
import racePacket from '../assets/racePackets/Ken Lake invite 2026.pdf';

function KenLake() {


  return (
    <>
      <title>Race Results | Burlington Track and Field Club</title>
      <meta name='description' content='Stay updated with the latest race results from Burlington Track and Field. Explore our comprehensive listings to track your progress and celebrate achievements. Visit us now!'/>
      <div className='klRow desktopOnly'>
        <div className='klCol2'>
          <div className="outerwrapperKL">
            <div className='innerwrapperKL' alt='An action shot from the Ken Lake Memorial Cross Country Meet' />
          </div>
        </div>
        <div className='klCol'>
          <h1 className='klTitle'>KEN LAKE MEMORIAL MEET</h1>
          <p className='resultDescription'>Every year, the Burlington Track and Field Club hosts the Ken Lake Memorial Meet during the Cross Country season.</p>
          <div className='buttonRowKL'>
            <a /* target="_blank" href='' */ className='klButton' disabled>REGISTERATION 2026</a>
            <a href={racePacket} target="_blank" className='klButton'>MEET PACKAGE 2026</a>
            <a href='/KenLake' className='klButton'>RESULTS</a>
          </div>
        </div>
      </div>

      <div className='klRow mobileOnly'>
        <div className='klCol'>
          <h1 className='klTitle'>KEN LAKE MEMORIAL MEET</h1>
          <img className='eventImage' src={eventPhoto} alt='An action shot from the Ken Lake Memorial Cross Country Meet' />
          <p className='resultDescription'>Every year, the Burlington Track and Field Club hosts the Ken Lake Memorial Meet during the Cross Country season.</p>
          <div className='buttonRowKL'>
            <a /* target="_blank" href='' */  className='klButton'>REGISTERATION 2026</a>
            <a href={racePacket} target="_blank" className='klButton'>MEET PACKAGE 2026</a>
            <a href='/KenLake' className='klButton'>RESULTS</a>
          </div>
        </div>
      </div>
    </>
  )
}


export default KenLake

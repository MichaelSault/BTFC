import '../App.css';
import '../styles/btfcNews.css';

import awardPhoto from '../assets/mayaAward.jpg';

function BTFCNews() {


  return (
    <>
      <title>Race Results | Burlington Track & Field Club</title>
      <meta name='description' content='Stay updated with the latest race results from Burlington Track & Field. Explore our comprehensive listings to track your progress and celebrate achievements. Visit us now!'/>
      <div className='newsRow desktopOnly'>
        <div className='newsCol2'>
          <div className="outerwrapperNews">
            <div className='innerwrapperNews'>
              <img className="newsImage" src={awardPhoto} alt="BTFC Appearel options availaible in the store."/>
            </div>
          </div>
        </div>
        <div className='newsCol'>
          <h1 className='newsTitle'>KEN LAKE MEMORIAL MEET</h1>
          <p className='resultDescription'>Every year, the Burlington Track and Field Club hosts the Ken Lake Memorial Meet during the Cross Country season.</p>
          <div className='buttonRowNews'>
            <a href='/#/KenLake' className='newsButton'>RESULTS</a>
          </div>
        </div>
      </div>

      <div className='newsRow mobileOnly'>
        <div className='newsCol'>
          <h1 className='newsTitle'>KEN LAKE MEMORIAL MEET</h1>
          <img className='eventImage' src={awardPhoto} alt='An action shot from the Ken Lake Memorial Cross Country Meet' />
          <p className='resultDescription'>Every year, the Burlington Track and Field Club hosts the Gord Rusby Memorial Meet during the Outdoor Track season.</p>
          <div className='buttonRowNews'>
            <a href='/#/KenLake' className='newsButton'>RESULTS</a>
          </div>
        </div>
      </div>
    </>
  )
}


export default BTFCNews

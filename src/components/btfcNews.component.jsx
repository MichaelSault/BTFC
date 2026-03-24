import '../App.css';
import '../styles/btfcNews.css';

import awardPhoto from '../assets/mayaAward.jpg';

function BTFCNews() {


  return (
    <>
      <title>BTFC News | Burlington Track and Field Club</title>
      <meta name='description' content='Stay updated with the latest race results and news from the Burlington Track and Field Club.'/>
      <div className='newsRow desktopOnlyNews'>
        <div className='newsCol2'>
          <div className="outerwrapperNews">
            <img className="newsImage" src={awardPhoto} alt="2025 Athlete of the Year Winner.  Female U18.  Maya Markowska, Burlington Track and Field Club."/>
          </div>
        </div>
        <div className='newsCol'>
          <h1 className='newsTitle'>Congratulations!</h1>
          <p className='newsDescription'>Congratulations Maya Markowska on being named Athletics Ontario's 2025 Female U18 Athlete of the Year!</p>
          <div className='buttonRowNews'>
            <a href='https://www.instagram.com/p/DSvfeKziZIS/?img_index=3' target='_blank' className='newsButton'>VIEW POST</a>
          </div>
        </div>
      </div>

      <div className='newsRow mobileOnlyNews'>
        <div className='newsCol'>
          <h1 className='newsTitle'>Congratulations!</h1>
          <img className='newsImageMobile' src={awardPhoto} alt="2025 Athlete of the Year Winner.  Female U18.  Maya Markowska, Burlington Track and Field Club." />
          <p className='newsDescription'>Congratulations Maya Markowska on being named Athletics Ontario's 2025 Female U18 Athlete of the Year!</p>
          <div className='buttonRowNews'>
            <a href='https://www.instagram.com/p/DSvfeKziZIS/?img_index=3' target='_blank' className='newsButton'>VIEW POST</a>
          </div>
        </div>
      </div>
    </>
  )
}


export default BTFCNews

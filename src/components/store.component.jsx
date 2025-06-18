import '../App.css';
import '../styles/store.css';

import item1 from '../assets/BTFC Apparel/hat.png';
import item2 from '../assets/BTFC Apparel/blackshirt.png';
import item3 from '../assets/BTFC Apparel/hoodie.png';
import item4 from '../assets/BTFC Apparel/longshirt.png';
import item5 from '../assets/BTFC Apparel/yellowshirt.png';


function Store() {

  return (
    <>
        <div className='storeRow desktopOnly'>
            <div className='storeCol'>
                <h1 className='storeTitle'>BTFC APPAREL STORE</h1>
                <p className='storeDescription'>The BTFC apparel store is powered by KCK Teamwear.  All orders are made on demand and could take 7 to 10 business dats to complete.</p>
                <div className='buttonRowStore'>
                  <a href='https://www.kckteamwear.com/burlingtontrackandfield' className='storeButton'>VISIT STORE</a>
                </div>
            </div>
            <div className='storeCol2'>
              <div className='outerwrapperStore'>
                <div className='innerwrapperStore'>
                  <div className='sliderContainer'>
                    <div className='pic'/>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className='storeRow mobileOnly'>
          <div className='storeCol'>
            <h1 className='storeTitle'>BTFC APPAREL STORE</h1>
            <div className='sliderContainer'>
              <div className='pic'/>
            </div>
            <p className='storeDescription'>The BTFC apparel store is powered by KCK Teamwear.  All orders are made on demand and could take 7-10 business dats to complete.</p>
            <div className='buttonRowStore'>
              <a href='https://www.kckteamwear.com/burlingtontrackandfield' className='storeButton'>VISIT STORE</a>
            </div>
            <hr/>
          </div>
        </div>
    </>
  )
}

export default Store

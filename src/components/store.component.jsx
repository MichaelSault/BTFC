import '../App.css';
import '../styles/store.css';
import {useState, useEffect} from 'react';

import item1 from '../assets/BTFC Apparel/hat.png';
import item2 from '../assets/BTFC Apparel/blackshirt.png';
import item3 from '../assets/BTFC Apparel/hoodie.png';
import item4 from '../assets/BTFC Apparel/longshirt.png';
import item5 from '../assets/BTFC Apparel/yellowshirt.png';

let storeItems = [item1, item2, item3, item4, item5];
let storeIndex = 0;
let firstTime = 0;

function Store() {

  const [currentItem, setCurrentItem] = useState({
   item: ""
  });

  useEffect(() => {
    console.log("useEffect run");
    setCurrentItem(storeItems[0]);
    if (firstTime == 0) {
      firstTime = 1;
      resetTimer();
    }
  }, []);

  function resetTimer() {
    const timeoutId = setTimeout(() => {
      console.log('It has been 10 seconds');
      changeItem();
    }, 10000);
  }

  function changeItem() {
    storeIndex > 3 ? storeIndex = 0 : storeIndex++;
    console.log(storeIndex);
    console.log(storeItems[storeIndex]);
    setCurrentItem(storeItems[storeIndex]);
    console.log(currentItem);
    resetTimer();
  }


  return (
    <>
        <div className='storeRow desktopOnlyStore'>
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
                    <img className="storeItems" src={currentItem}/>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className='storeRow mobileOnlyStore'>
          <div className='storeCol'>
            <h1 className='storeTitle'>BTFC APPAREL STORE</h1>
            <div className='sliderContainer'>
              <img className="storeItems" src={currentItem}/>
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

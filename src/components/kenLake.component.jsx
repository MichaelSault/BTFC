import '../App.css';
import '../styles/kenlake.css';

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
          <h1 className='title'>KEN LAKE MEMORIAL MEET</h1>
          <p className='resultDescription'>Every year, the Burlington Track and Field Club hosts the Ken Lake Memorial Meet during the Cross Country season.</p>
          <div className='buttonRowKL'>
            <a className='button'>RESULTS</a>
          </div>
        </div>
      </div>

      <div className='klRow mobileOnly'>
        <div className='klBanner'>
            <h1 className='title'>KEN LAKE MEMORIAL MEET</h1>
        </div>
        <div className='klCol'>
          <p className='resultDescription'>Every year, the Burlington Track and Field Club hosts the Gord Rusby Memorial Meet during the Outdoor Track season.</p>
          <div className='buttonRowKL'>
            <a className='button'>RESULTS</a>
          </div>
        </div>
      </div>
    </>
  )
}


export default KenLake

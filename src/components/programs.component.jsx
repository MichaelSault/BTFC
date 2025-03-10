import '../App.css';
import '../styles/programs.css';

function Programs() {

  return (
    <>
        <div className="programsRow">
          <h1 className='programTitle'>BTFC PROGRAMS</h1>
          <p className='description'>The Burlington Track and Field Club offers a number of different programs depending on age and event distance.</p>
          <div className='buttonRow'>
            <a className='programButton'>JUNIOR</a>
            <a className='programButton'>DISTANCE</a>
            <a className='programButton'>SPRINT</a>
          </div>
        </div>
    </>
  )
}

export default Programs

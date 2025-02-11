import '../App.css';
import '../styles/registration.css';

import backgroundImage from '../assets/runningbanner.jpeg';

function Registration() {

  return (
    <>
        <div className="registrationRow desktopOnly">
            <div className='registrationCol'>
                <h1 className='registrationTitle'>REGISTRATION OPTIONS</h1>
                <div className='disclaimerBox'>
                    <p className='registrationDisclaimer'>
                        <i>
                            Fees include weekly training, MTA membership fees, meet entries and club singlet.
                        </i>
                    </p>
                </div>
            </div>
            <div className='registrationCol'>
                <div className='subRow'>
                    <h2 className='programName'>INDOOR TRACK</h2>
                    <p className='registrationText'>
                        January - April<br/>
                        Junior - $140<br/>
                        Senior - $150<br/>
                        <b><i>Registration opened November 25th, 2024</i></b>
                    </p>
                </div>
                <div className='subRow'>
                    <h2 className='programName'>OUTDOOR TRACK</h2>
                    <p className='registrationText'>
                        January - April<br/>
                        Junior - $140<br/>
                        Senior - $150<br/>
                        <b><i>Registration opened February 10th, 2025</i></b>
                    </p>
                </div>
                <div className='subRow'>
                    <h2 className='programName'>CROSS COUNTRY</h2>
                    <p className='registrationText'>
                        January - April<br/>
                        Junior - $140<br/>
                        Senior - $150<br/>
                        <b><i>Registration opens July 14th, 2025</i></b>
                    </p>
                </div>
                <div className='subRow'>
                    <h2 className='programName'>FULL YEAR</h2>
                    <p className='registrationText'>
                        January - April<br/>
                        Junior - $140<br/>
                        Senior - $150<br/>
                        <b><i>Registration opened November 25th, 2024</i></b>
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Registration

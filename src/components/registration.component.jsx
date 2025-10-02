import '../App.css';
import '../styles/registration.css';

import backgroundImage from '../assets/runningbanner.jpeg';

function Registration() {

  return (
    <>
        <div className="registrationRow">
            <div className='registrationCol'>
                <h1 className='registrationTitle'>REGISTRATION OPTIONS</h1>
                    <p className='registrationDisclaimerDesktop'>
                        <i>
                            Fees include weekly training, MTA membership fees, meet entries and club singlet.
                        </i>
                    </p>
            </div>
            <div className='registrationCol2'>
                <div className='subRow'>
                    <h2 className='programName'>FULL YEAR</h2>
                    <p className='registrationText'>
                        January - December<br/>
                        Junior - $390<br/>
                        Senior - $425<br/>
                        <a className='whiteText' href='https://www.trackie.com/club/BTFC2025FullYear'><b><i>Registration: Closed</i></b></a>
                    </p>
                </div>
                <div className='subRow'>
                    <h2 className='programName'>INDOOR TRACK</h2>
                    <p className='registrationText'>
                        January - April<br/>
                        Junior - $140<br/>
                        Senior - $150<br/>
                        <a className='whiteText' href='https://www.trackie.com/club/BTFC2025IndoorOnly'><b><i>Registration: Closed</i></b></a>
                    </p>
                </div>
                <div className='subRow'>
                    <h2 className='programName'>OUTDOOR TRACK</h2>
                    <p className='registrationText'>
                        May - August<br/>
                        Junior - $240<br/>
                        Senior - $275<br/>
                        <a className='whiteText' href='https://www.trackie.com/club/2025OutdoorOnly'><b><i>Registration: Closed<br/></i></b></a>
                    </p>
                </div>
                <div className='subRow'>
                    <h2 className='programName'>CROSS COUNTRY/ SR.SPRINT</h2>
                    <p className='registrationText'>
                        September - December<br/>
                        Junior - $140<br/>
                        Senior - $150<br/>
                        <a className='whiteText' href='https://www.trackie.com/club/BTFC2024CrossCountrySeniorSprint'><b><i>Registration: Closed<br/></i></b></a>
                    </p>
                </div>
                <div className='disclaimerBox'>
                    <p className='registrationDisclaimerMobile'>
                        <i>
                            Fees include weekly training, MTA membership fees, meet entries and club singlet.
                        </i>
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Registration

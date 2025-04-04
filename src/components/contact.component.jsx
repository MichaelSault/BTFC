import '../App.css';
import '../styles/contact.css';

function Contact() {

  return (
    <>
        <div className="contactRow">
            <div className='contactCol'>
                <h1 className='contactTitle'>CONTACT US</h1>
                <div className='disclaimerBox'>
                    <p className='contactDisclaimer'>
                        <b>Tammy Mackenzie</b>
                        <br/>
                        <b><i>Head Coach</i></b>
                        <br/>
                        <b><i>Junior and Senior Distance Team</i></b>
                        <br/>
                        <b>Email: </b> tammymackenzie@bell.net
                        <br/>
                        <b>Call: </b> (905) 332-7072
                        <br/>
                        <br/>
                        <b>General Inquiries:</b>
                        <br/>
                        president@burlingtontrackandfield.org
                    </p>
                </div>
            </div>
            {/* <div className='contactColRight'>
                <div className='subRow'>
                    <p className='contactText'>
                      We are a volunteer organization with the following aims and objectives:
                      <br/>
                      <br/>
                      <ul>
                        <li>
                          To foster, promote and teach track and field within the city of Burlington and to provide maximum opportunities for all eligible individuals to participate regardless of ability.
                        </li>
                        <br/>
                        <li>
                          To develop and encourage sportsmanship and community spirit among all participates to the betterment of their physical, mental and social well-being.
                        </li>
                        <br/>
                        <li>
                          To promote and sponsor such activates as may contribute to the financial well-being of the club.
                        </li>
                        <br/>
                        <li>
                          We encourage you to try us out a couple of times before committing yourself to joining.
                        </li>
                      </ul>
                    </p>
                </div>
            </div> */}
        </div>
    </>
  )
}

export default Contact

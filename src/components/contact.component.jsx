import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import '../App.css';
import '../styles/contact.css';

import ContactImage from '../assets/contact.png';


function Contact() {
  const navigate = useNavigate();

  return (
    <>
      <div className='contactRow'>
        <div className='ContactQuestionsCol'>
            <div className='contactTitleSubCol'>
                <h2 className='contactTitle'>Contact Us</h2>
                <hr className='hrContact'/>
                
                <div className='contactInfoSubCol'>
                  <h3>Tammy Mackenzie - Head Coach</h3>
                  <h6>Junior Group - Ages 5 to 13</h6>
                  <h6>Senior Distance Group - Highschool Age</h6>
                  <br/>
                  <h6>Email - tammymackenzie@bell.net</h6>
                  <h6>Call - (905)-332-7072</h6>
                  <br/>
                  <h3>General Inquiries</h3>
                  <h6>Email - president@burlingtontrackandfield.org</h6>
                </div>
            </div>
        </div>
        <div className='contactPhotoCol'>
          <img src={ContactImage} />
          <h6 className='contactSubText'><i>Caption text for the above image.</i></h6>
        </div>
      </div>
                
    </>
  )
}

export default Contact

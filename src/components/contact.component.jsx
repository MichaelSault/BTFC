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
                <h1 className='contactTitle'>Contact Us</h1>
                <hr className='hrContact'/>
                
                <div className='contactInfoSubCol'>
                  <h2>Tammy Mackenzie - Head Coach</h2>
                  <h4>Junior Group - Ages 5 to 13</h4>
                  <h4>Senior Distance Group - Highschool Age</h4>
                  <br/>
                  <h4>Email - tammymackenzie@bell.net</h4>
                  <h4>Call - (905)-332-7072</h4>
                  <br/>
                  <h2>General Inquiries</h2>
                  <h4>Email - president@burlingtontrackandfield.org</h4>
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

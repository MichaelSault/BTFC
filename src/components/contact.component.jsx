import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import '../App.css'


function Contact() {
  const navigate = useNavigate();

  return (
    <>
        <div className="contactRow">
            <h1 className="title">Contact Us</h1>
        </div>
                
    </>
  )
}

export default Contact

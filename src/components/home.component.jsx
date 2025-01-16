import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import '../App.css'


//import photos
import Banner from '../assets/runningbanner.jpeg';

//import page components
import Programs from './programs.component.jsx';
import Contact from "./contact.component.jsx";
import Results from "./results.component.jsx";
import Directors from "./directors.component.jsx";
import Footer from "./socialFooter.component.jsx";

function Home() {
  const navigate = useNavigate();

  return (
    <>
        <img src={Banner} className="banner"/>
        {/* <h1 className="title">Burlington Track and Field Club</h1> */}
        <Programs/>    
        <Contact/>
        <Results/>
        <Directors/>
        <Footer />
    </>
  )
}

export default Home

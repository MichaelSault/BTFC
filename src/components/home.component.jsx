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
        <div className="introRow">
          <h1><b>The Burlington Track and Field Club</b></h1>
          <hr/>
          <p>This will be a description or a brief history of the Burlington Track and Field club.  We have a long history of at least 30+ years but likely much longer.
              We are a non-profit the has supported the community for the entire span of the clubs history.  Someone else will have to write this more professionally
              but this will serve as some sort of placeholder.</p>
        </div>
        <Programs/>
        <Contact/>
        {/* <h1 className="title">Burlington Track and Field Club</h1> */}
        {/*
        
        <Results/>
        <Directors/> */}
        <Footer />
    </>
  )
}

export default Home

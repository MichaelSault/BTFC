import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import '../App.css'

//import page components
import BannerHero from './banner.component.jsx';
import Programs from './programs.component.jsx';
import ProgramsMobile from './programsMobile.component..jsx';
import Results from "./results.component.jsx";
import ResultsMobile from "./resultsMobile.component.jsx";
import Contact from "./contact.component.jsx";
import ContactMobile from "./contactMobile.component.jsx";
import Directors from "./directors.component.jsx";
import DirectorsMobile from "./directorsMobile.component.jsx";
import Footer from "./socialFooter.component.jsx";

function Home() {
  const navigate = useNavigate();

  return (
    <>
        <BannerHero />
        <div className="introRow">
          <h1><b>The Burlington Track and Field Club</b></h1>
          <hr/>
          <p>This will be a description or a brief history of the Burlington Track and Field club.  We have a long history of at least 30+ years but likely much longer.
              We are a non-profit the has supported the community for the entire span of the clubs history.  Someone else will have to write this more professionally
              but this will serve as some sort of placeholder.</p>
        </div>
        <Programs/>
        <ProgramsMobile/>
        <Results/>
        <ResultsMobile/>
        <Contact/>
        <ContactMobile/>
        <Directors/>
        <DirectorsMobile/>
    </>
  )
}

export default Home

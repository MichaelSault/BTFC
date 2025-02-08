import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import '../App.css';

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
import Registration from "./registration.component.jsx";

function Home() {
  const navigate = useNavigate();

  return (
    <>
        <BannerHero />
        <Programs/>
        <ProgramsMobile/>
        <Registration/>
    </>
  )
}

export default Home

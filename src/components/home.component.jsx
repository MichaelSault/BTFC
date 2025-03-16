import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import '../App.css';

//import page components
import BannerHero from './banner.component.jsx';
import Programs from './programs.component.jsx';
import Junior from './programs/junior.component.jsx';
import Distance from './programs/distance.component.jsx';
import Sprint from './programs/sprint.component.jsx';
import GordRusby from "./gordRusby.component.jsx";
import KenLake from "./kenLake.component.jsx";
import GrResults from "./events/grResults.component.jsx";
import KlResults from "./events/klResults.component.jsx";
import Registration from "./registration.component.jsx";
import Contact from "./contact.component.jsx";
import Directors from "./directors.component.jsx";

function Home() {
  const navigate = useNavigate();

  return (
    <>
        <BannerHero />
        <Programs/>
        <Registration/>
        <GordRusby/>
        <KenLake/>
        <Contact/>
        <Directors/>
    </>
  )
}

export default Home

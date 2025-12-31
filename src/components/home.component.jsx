import {useEffect} from 'react';

import '../App.css';

//import page components
import BannerHero from './banner.component.jsx';
import Programs from './programs.component.jsx';
import GordRusby from "./gordRusby.component.jsx";
import KenLake from "./kenLake.component.jsx";
import Registration from "./registration.component.jsx";
import Contact from "./contact.component.jsx";
import Store from "./store.component.jsx";
import Directors from "./directors.component.jsx";

function Home() {
  return (
    <>
      <div className='homePage'>
        <BannerHero />
        <Programs/>
        <Registration/>
        <GordRusby/>
        <KenLake/>
        <Contact/>
        <Store/>
        <Directors/>
      </div>
      <title>Home | Burlington Track & Field Club</title>
      <meta name="description" content="Welcome to Burlington Track and Field, your premier destination for running enthusiasts in Burlington. Discover our vibrant community, engaging events, and expert coaching. Join us and unleash your potential on the track and field!"/>
    </>
  )
}

export default Home

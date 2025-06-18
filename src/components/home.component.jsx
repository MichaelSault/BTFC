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
        <BannerHero />
        <Programs/>
        <Registration/>
        <GordRusby/>
        <KenLake/>
        <Contact/>
        <Store/>
        <Directors/>
    </>
  )
}

export default Home

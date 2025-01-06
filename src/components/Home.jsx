import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import '../App.css'


//import photos
import Banner from '../assets/runningbanner.jpeg';

function Home() {
  const navigate = useNavigate();

  return (
    <>
        <img src={Banner} width={"100%"}/>
        <h1 className="title">Burlington Track and Field Club</h1>        
    </>
  )
}

export default Home

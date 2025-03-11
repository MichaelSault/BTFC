import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import '../../App.css';

import Footer from "../socialFooter.component";


function klResults() {
  const navigate = useNavigate();

  return (
    <>
        <h1>KEN LAKE MEMORIAL MEET</h1>
        <h4>CROSS COUNTRY</h4>
    </>
  )
}

export default klResults
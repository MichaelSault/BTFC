import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import '../../App.css';

import Footer from "../socialFooter.component";

function Sprint() {
  const navigate = useNavigate();

  return (
    <>
        <h1>Senior Sprint Program</h1>
        <Footer/>
    </>
  )
}

export default Sprint

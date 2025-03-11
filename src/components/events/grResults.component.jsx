import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import '../../App.css';

import Footer from "../socialFooter.component";


function grResults() {
  const navigate = useNavigate();

  return (
    <>
        <h1>GORD RUSBY MEMORIAL MEET</h1>
        <h4>TRACK AND FIELD</h4>
    </>
  )
}

export default grResults

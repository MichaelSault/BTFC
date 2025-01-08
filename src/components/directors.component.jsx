import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import '../App.css'


function Directors() {
  const navigate = useNavigate();

  return (
    <>
        <div className="directorsRow">
            <h1 className="title">Board of Directors</h1>
        </div>
                
    </>
  )
}

export default Directors

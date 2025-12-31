import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import '../App.css';
import '../styles/bod.css';

import BodTile from "./bodTile.component";

import President from "../assets/bodImages/president.jpg";
import AthleticDirector from "../assets/bodImages/athleticDirector.jpg";
import Treasurer from "../assets/bodImages/treasurer.jpg";

import Secretary from "../assets/bodImages/secretary.jpg";
import Coach from "../assets/bodImages/coach.jpg";

import Director1 from "../assets/bodImages/director1.jpg";
import Director2 from "../assets/bodImages/director2.jpg";
import Director3 from "../assets/bodImages/director3.jpg";
import Director4 from "../assets/bodImages/director4.jpg";



function Directors() {
  const navigate = useNavigate();
  
  return (
    <>
      <title>Staff | Burlington Track & Field Club</title>
      <meta name="description" content="Meet the dedicated staff behind Burlington Track & Field Club. Discover our team of experienced coaches and administrators committed to fostering a thriving athletic community. Learn more about our programs and initiatives today!"/>
      <div className="directorsRow">
        <div className="bodTitleRow">
          <h1 className="bodTitle">2025 BOARD OF DIRECTORS</h1>
        </div>
        <div className="creditsRow desktopOnlyDOB">
          <div className="bodCentered1">
            <BodTile name={"Gustav Karlsson"} title={"Club President"} photo={President} />
            <BodTile name={"Scott Douglas"} title={"Athletic Director"} photo={AthleticDirector}/>
            <BodTile name={"Angus Shuttleworth"} title={"Treasurer"} photo={Treasurer}/>
            <BodTile name={"Danielle Leahy Laughlin"} title={"Secretary"} photo={Secretary}/>
            <BodTile name={"Tammy MacKenzie"} title={"Head Coach"} photo={Coach}/>
          </div>
          <div className="bodCentered2">
            <BodTile name={"Nirup Urs"} title={"Director"} photo={Director1}/>
            <BodTile name={"Heather Larsen"} title={"Director"} photo={Director2}/>
            <BodTile name={"JC Castellanos"} title={"Director"} photo={Director3}/>
            <BodTile name={"David Parkes"} title={"Director"} photo={Director4}/>
          </div>
        </div>

        <div className="creditsRow mobileOnlyDOB">
          <div className="bodCentered">
            <BodTile name={"Gustav Karlsson"} title={"Club President"} photo={President} />
            <BodTile name={"Scott Douglas"} title={"Athletic Director"} photo={AthleticDirector}/>
            <BodTile name={"Angus Shuttleworth"} title={"Treasurer"} photo={Treasurer}/>
            <BodTile name={"Danielle Leahy Laughlin"} title={"Secretary"} photo={Secretary}/>
            <BodTile name={"Tammy MacKenzie"} title={"Head Coach"} photo={Coach}/>
            <BodTile name={"Nirup Urs"} title={"Director"} photo={Director1}/>
            <BodTile name={"Heather Larsen"} title={"Director"} photo={Director2}/>
            <BodTile name={"JC Castellanos"} title={"Director"} photo={Director3}/>
            <BodTile name={"David Parkes"} title={"Director"} photo={Director4}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Directors

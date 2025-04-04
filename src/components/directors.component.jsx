import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import '../App.css';
import '../styles/bod.css';

import BodTile from "./bodTile.component";
import BodTileRight from "./bodTileRight.component";

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
    <div className="directorsRow">
      <div className="bodTitleRow">
        <h1 className="bodTitle">2025 BOARD OF DIRECTORS</h1>
      </div>
      <div className="desktopOnly">
        <div className="bodSubRow">
          <BodTile name={"Gustav Karlsson"} title={"Club President"} photo={President} />
          <BodTile name={"Scott Douglas"} title={"Athletic Director"} photo={AthleticDirector}/>
          <BodTile name={"Angus Shuttleworth"} title={"Treasurer"} photo={Treasurer}/>
        </div>
        <div className="bodSubRow">
          <BodTile name={"Danielle Leahy Laughlin"} title={"Secretary"} photo={Secretary}/>
          <BodTile name={"Tammy MacKenzie"} title={"Head Coach"} photo={Coach}/>
        </div>
        <div className="bodSubRow">
          <BodTile name={"Nirup Urs"} title={"Director"} photo={Director1}/>
          <BodTile name={"Heather Larsen"} title={"Director"} photo={Director2}/>
          <BodTile name={"JC Castellanos"} title={"Director"} photo={Director3}/>
          <BodTile name={"David Parkes"} title={"Director"} photo={Director4}/>
        </div>
      </div>

      <div className="mobileOnly">
        <BodTile name={"Gustav Karlsson"} title={"President"} photo={President} />
        <BodTileRight name={"Scott Douglas"} title={"Athletic Director"} photo={AthleticDirector}/>
        <BodTile name={"Angus Shuttleworth"} title={"Treasurer"} photo={Treasurer}/>
        <BodTileRight name={"Danielle Leahy Laughlin"} title={"Secretary"} photo={Secretary}/>
        <BodTile name={"Tammy MacKenzie"} title={"Head Coach"} photo={Coach}/>
        <BodTileRight name={"Nirup Urs"} title={"Director"} photo={Director1}/>
        <BodTile name={"Heather Larsen"} title={"Director"} photo={Director2}/>
        <BodTileRight name={"JC Castellanos"} title={"Director"} photo={Director3}/>
        <BodTile name={"David Parkes"} title={"Director"} photo={Director4}/>
      </div>
    </div>
    </>
  )
}

export default Directors

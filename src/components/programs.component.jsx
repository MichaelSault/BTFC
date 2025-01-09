import { useNavigate } from "react-router-dom";
import '../App.css'

import ProgramCard from "./programCard.component";


function Programs() {
  const navigate = useNavigate();

  return (
    <>
        <div className="programsRow">
            <h1 className="title">Programs</h1>
        </div>

        <div className="programsRow">

          <div className="programsCardsRow">
            <ProgramCard 
              name="Junior(MTA)" 
              age="6 to 13" 
              distance="All" 
              experience="All levels welcome" 
              training="1-2 days per week" 
              schedule="Indoor - Monday, Wednesday; Outdoor / XC - Monday, Thursday 6-7:30pm" 
              races="Meets are on weekends throughout each season. Meet schedules are TBC" 
              season="January to April: Indoor Training; May to August: Outdoor Track; September to December: Cross Country + Indoor Training"
            />
            <ProgramCard 
              name="Senior Distance (AO)" 
              distance="Middle & Long 800m and up" 
              age="High school age and up" 
              experience="Should be able to run at least 4km." 
              training="2-3 days per week" 
              schedule="Monday and Wednesday evenings; Saturday mornings" 
              races="Meets are on weekends throughout each season and some weekday evenings in summer." 
              season="January to April: Indoor Training; May to August: Outdoor Track; September to December: Cross Country + Indoor Training"
            />
            <ProgramCard 
              name="Senior Sprint (AO)" 
              distance="Sprint up to 400m" 
              age="High school age and up" 
              experience="All levels welcome" 
              training="2-3 days per week" 
              schedule="Monday and Wednesday evenings; Saturday mornings" 
              races="Meets are on weekends throughout each season and some weekday evenings in summer." 
              season="January to April: Indoor Training; May to August: Outdoor Track; September to December: Outdoor + Indoor Training"
            />
          </div>
        </div>      
    </>
  )
}

export default Programs

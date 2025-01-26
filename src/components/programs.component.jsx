import '../App.css';

import ProgramCard from "./programCard.component";

import ProgramCardLong from "./programCardLong.component";

//card photos
import junior from '../assets/lasalpark.png';
import senior from '../assets/distance.jpeg';
import sprint from '../assets/sprint.jpeg';

function Programs() {

  return (
    <>
        <div className="programsRow">
          <hr/>
          <h1><b>Available Programs</b></h1>
          <div className="bodyProgramCards">
            <div className="programsCardsRow">
              <ProgramCardLong
                photo={junior}
                name="Junior (MTA)" 
                age="6 to 13" 
                distance="All" 
                experience="All levels welcome" 
                training="1-2 days per week" 
                schedule="Indoor - Monday, Wednesday; Outdoor / XC - Monday, Thursday 6-7:30pm" 
                races="Meets are on weekends throughout each season. Meet schedules are TBC" 
                seasons="January to April: Indoor Training; May to August: Outdoor Track; September to December: Cross Country + Indoor Training"
                url="Junior"
              />
              <ProgramCardLong
                photo={senior}
                name="Senior Distance (AO)" 
                distance="Middle & Long 800m and up" 
                age="High school age and up" 
                experience="Should be able to run at least 4km." 
                training="2-3 days per week" 
                schedule="Monday and Wednesday evenings; Saturday mornings" 
                races="Meets are on weekends throughout each season and some weekday evenings in summer." 
                seasons="January to April: Indoor Training; May to August: Outdoor Track; September to December: Cross Country + Indoor Training"
                url="Distance"
              />
              <ProgramCardLong
                photo={sprint}
                name="Senior Sprint (AO)" 
                distance="Sprint up to 400m" 
                age="High school age and up" 
                experience="All levels welcome" 
                training="2-3 days per week" 
                schedule="Monday and Wednesday evenings; Saturday mornings" 
                races="Meets are on weekends throughout each season and some weekday evenings in summer." 
                seasons="January to April: Indoor Training; May to August: Outdoor Track; September to December: Outdoor + Indoor Training"
                url="Sprint"
              />
            </div>
          </div>
        </div>      
    </>
  )
}

export default Programs

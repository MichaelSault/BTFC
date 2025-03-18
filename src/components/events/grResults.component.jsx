import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import '../../App.css';

import Footer from "../socialFooter.component";


function grResults() {
  const navigate = useNavigate();

  return (
    <>
      <div className='grRow desktopOnly'>
        <div className='grResultsCol2'>
          <h1 className="grResultText">GORD RUSBY</h1>
          <h1 className="grResultText">MEMORIAL MEET</h1>
          <h4 className="grResultSubText">TRACK AND FIELD</h4>
        </div>
        <div className='grResultCol'>
          <a href='https://sportmadesimple.com/results/GordRusby2024/index.html' className='grResultButton'>2024 RESULTS</a>
          <a href='https://www.burlingtontrackandfield.org/_files/ugd/2f2bfd_61e44dcc349b4c3c908ded2e6eeb147b.pdf' className='grResultButton'>2023 RESULTS</a>
          <a href='https://www.burlingtontrackandfield.org/_files/ugd/2f2bfd_407dbf51336f4f5b88b4f69ede6c3e4d.pdf?index=true' className='grResultButton'>2022 RESULTS</a>
          <a href='https://www.burlingtontrackandfield.org/_files/ugd/2f2bfd_e2c69f3e0feb43e588ae61f0c6a5af98.pdf?index=true' className='grResultButton'>2019 RESULTS</a>
          <a href='https://www.burlingtontrackandfield.org/_files/ugd/2f2bfd_809f9ce44a034f1da43669c57dbe2bde.pdf?index=true' className='grResultButton'>2018 RESULTS</a>
        </div>
      </div>

      <div className='grRow mobileOnly'>
        <div className='grResultCol'>
          <a href='https://sportmadesimple.com/results/GordRusby2024/index.html' className='grResultButton'>2024 RESULTS</a>
          <a href='https://www.burlingtontrackandfield.org/_files/ugd/2f2bfd_61e44dcc349b4c3c908ded2e6eeb147b.pdf' className='grResultButton'>2023 RESULTS</a>
          <a href='https://www.burlingtontrackandfield.org/_files/ugd/2f2bfd_407dbf51336f4f5b88b4f69ede6c3e4d.pdf?index=true' className='grResultButton'>2022 RESULTS</a>
          <a href='https://www.burlingtontrackandfield.org/_files/ugd/2f2bfd_e2c69f3e0feb43e588ae61f0c6a5af98.pdf?index=true' className='grResultButton'>2019 RESULTS</a>
          <a href='https://www.burlingtontrackandfield.org/_files/ugd/2f2bfd_809f9ce44a034f1da43669c57dbe2bde.pdf?index=true' className='grResultButton'>2018 RESULTS</a>
        </div>
      </div>
    </>
  )
}

export default grResults

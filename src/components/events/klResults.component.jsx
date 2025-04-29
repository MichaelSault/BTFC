import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import '../../App.css';

import Footer from "../socialFooter.component";


function klResults() {
  const navigate = useNavigate();

  return (
    <>
      <div className='klRow desktopOnly'>
        <div className='klResultsCol2'>
          <h1 className="klResultText">KEN LAKE</h1>
          <h1 className="klResultText">MEMORIAL MEET</h1>
          <h4 className="klResultSubText">CROSS COUNTRY</h4>
        </div>
        <div className='klResultCol'>
          <a href='https://www.burlingtontrackandfield.org/_files/ugd/2f2bfd_15944f2a8c894697ac1d4bd03b26221e.pdf' className='klResultButton'>2024 RESULTS</a>
          <a href='https://www.burlingtontrackandfield.org/_files/ugd/2f2bfd_655a990a9269438f9d84117be67021f7.pdf' className='klResultButton'>2023 RESULTS</a>
          <a href='https://www.burlingtontrackandfield.org/_files/ugd/2f2bfd_fb434fc143044e80ab2ac78b2be27c3d.pdf' className='klResultButton'>2022 RESULTS</a>
          <a href='https://www.burlingtontrackandfield.org/_files/ugd/2f2bfd_60350db6b5f5418cb5ebbcad43d4c218.pdf?index=true' className='klResultButton'>2021 RESULTS</a>
          <a href='https://www.burlingtontrackandfield.org/_files/ugd/2f2bfd_a350758d463e497fb06cff029d99bc82.pdf?index=true' className='klResultButton'>2019 RESULTS</a>
          <a href='https://www.burlingtontrackandfield.org/_files/ugd/2f2bfd_250d9cfcbf184bb1bc973569b47edc9a.pdf?index=true' className='klResultButton'>2018 RESULTS</a>
        </div>
      </div>

      <div className='klRow mobileOnly'>
        <div className='klResultCol'>
          <h1 className="grTitle">KEN LAKE</h1>
          <a href='https://www.burlingtontrackandfield.org/_files/ugd/2f2bfd_15944f2a8c894697ac1d4bd03b26221e.pdf' className='klResultButton'>2024 RESULTS</a>
          <a href='https://www.burlingtontrackandfield.org/_files/ugd/2f2bfd_655a990a9269438f9d84117be67021f7.pdf' className='klResultButton'>2023 RESULTS</a>
          <a href='https://www.burlingtontrackandfield.org/_files/ugd/2f2bfd_fb434fc143044e80ab2ac78b2be27c3d.pdf' className='klResultButton'>2022 RESULTS</a>
          <a href='https://www.burlingtontrackandfield.org/_files/ugd/2f2bfd_60350db6b5f5418cb5ebbcad43d4c218.pdf?index=true' className='klResultButton'>2021 RESULTS</a>
          <a href='https://www.burlingtontrackandfield.org/_files/ugd/2f2bfd_a350758d463e497fb06cff029d99bc82.pdf?index=true' className='klResultButton'>2019 RESULTS</a>
          <a href='https://www.burlingtontrackandfield.org/_files/ugd/2f2bfd_250d9cfcbf184bb1bc973569b47edc9a.pdf?index=true' className='klResultButton'>2018 RESULTS</a>
        </div>
      </div>
    </>
  )
}

export default klResults
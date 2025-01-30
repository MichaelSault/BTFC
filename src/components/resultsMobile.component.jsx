import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import '../App.css'
import '../styles/results.css';

import ContactImage from '../assets/contact.png';



function ResultsMobile() {
  const navigate = useNavigate();

  return (
    <div className='mobileOnly'>
      <div className='resultsRow'>
        <div className='resultsQuestionsCol'>
            <div className='resultsTitleSubCol'>
                <h2 className='resultsTitle'>Gord Rusby Memorial Meet (Mobile)</h2>
                <hr className='hrResults'/>
                
                <div className='resultsInfoSubCol'>
                  <h5>This is our annual track and field meet in memorial to Gord Rusby</h5>
                  <Stack spacing={2} direction="row">
                    <Button onClick={() => window.open('https://sportmadesimple.com/results/GordRusby2024/index.html', '_blank')} variant="outlined">2024 Results</Button>
                    <Button onClick={() => window.open('https://www.burlingtontrackandfield.org/_files/ugd/2f2bfd_61e44dcc349b4c3c908ded2e6eeb147b.pdf', '_blank')} variant="outlined">2023 Results</Button>
                    <Button onClick={() => window.open('https://www.burlingtontrackandfield.org/_files/ugd/2f2bfd_407dbf51336f4f5b88b4f69ede6c3e4d.pdf?index=true', '_blank')} variant="outlined">2022 Results</Button>
                  </Stack>
                  <Stack spacing={2} direction="row">
                    <Button onClick={() => window.open('https://www.burlingtontrackandfield.org/_files/ugd/2f2bfd_e2c69f3e0feb43e588ae61f0c6a5af98.pdf?index=true', '_blank')} variant="outlined">2019 Results</Button>
                    <Button onClick={() => window.open('https://www.burlingtontrackandfield.org/_files/ugd/2f2bfd_809f9ce44a034f1da43669c57dbe2bde.pdf?index=true', '_blank')} variant="outlined">2018 Results</Button>
                  </Stack>
                </div>
            </div>
        </div>
        <div className='resultsPhotoCol'>
          <img src={ContactImage} />
          <h6 className='resultsSubText'><i>Gord Rusby Memorial Meet (July 2024)</i></h6>
        </div>
      </div>

      <div className='resultsRow'>
        <div className='resultsPhotoCol'>
            <img src={ContactImage} />
            <h6 className='resultsSubText'><i>Ken Lake Memorial Meet (October 2024)</i></h6>
        </div>
        <div className='resultsQuestionsCol'>
            <div className='resultsTitleSubCol'>
                <h2 className='resultsTitle'>Ken Lake Memorial Meet (Mobile)</h2>
                <hr className='hrResults'/>
                
                <div className='resultsInfoSubCol'>
                  <h5>This is our annual cross country meet in memorial to Ken Lake</h5>
                  <Stack spacing={2} direction="row">
                    <Button onClick={() => window.open('https://www.burlingtontrackandfield.org/_files/ugd/2f2bfd_15944f2a8c894697ac1d4bd03b26221e.pdf', '_blank')} variant="outlined">2024 Results</Button>
                    <Button onClick={() => window.open('https://www.burlingtontrackandfield.org/_files/ugd/2f2bfd_655a990a9269438f9d84117be67021f7.pdf', '_blank')} variant="outlined">2023 Results</Button>
                    <Button onClick={() => window.open('https://www.burlingtontrackandfield.org/_files/ugd/2f2bfd_fb434fc143044e80ab2ac78b2be27c3d.pdf', '_blank')} variant="outlined">2022 Results</Button>
                  </Stack>
                  <Stack spacing={2} direction="row">
                    <Button onClick={() => window.open('https://www.burlingtontrackandfield.org/_files/ugd/2f2bfd_60350db6b5f5418cb5ebbcad43d4c218.pdf?index=true', '_blank')} variant="outlined">2021 Results</Button>
                    <Button onClick={() => window.open('https://www.burlingtontrackandfield.org/_files/ugd/2f2bfd_a350758d463e497fb06cff029d99bc82.pdf?index=true', '_blank')} variant="outlined">2019 Results</Button>
                    <Button onClick={() => window.open('https://www.burlingtontrackandfield.org/_files/ugd/2f2bfd_250d9cfcbf184bb1bc973569b47edc9a.pdf?index=true', '_blank')} variant="outlined">2018 Results</Button>
                  </Stack>
                </div>
            </div>
        </div>
      </div>
                
    </div>
  )
}

export default ResultsMobile

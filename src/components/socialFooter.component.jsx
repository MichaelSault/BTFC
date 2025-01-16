import { useNavigate } from "react-router-dom";
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

import '../App.css';

function Footer() {
  const navigate = useNavigate();

  return (
    <MDBFooter color='white' bgColor='dark' className='text-center text-lg-start text-muted'>
        <section className='p-4 border-top'>
            <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4 text-white'>
                    <MDBIcon icon="gem" className="me-3"/>
                    Burlington Track and Field
                </h6>
                </MDBCol>

                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4 text-white'>Programs</h6>
                <p>
                    <a href='#!' className='text-white'>
                    Junior
                    </a>
                </p>
                <p>
                    <a href='#!' className='text-white'>
                    Senior Distance
                    </a>
                </p>
                <p>
                    <a href='#!' className='text-white'>
                    Senior Sprint
                    </a>
                </p>
                </MDBCol>

                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4 text-white'>Useful links</h6>
                <p>
                    <a href='#!' className='text-white'>
                    Registration
                    </a>
                </p>
                <p>
                    <a href='#!' className='text-white'>
                    Results
                    </a>
                </p>
                <p>
                    <a href='#!' className='text-white'>
                    Contact
                    </a>
                </p>
                <p>
                    <a href='#!' className='text-white'>
                    Board of Directors
                    </a>
                </p>
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4 text-white'>Contact</h6>
                <p className='text-white'>
                    <MDBIcon icon="home" className="me-2" />
                    Head Coach - Tammy Mackenzie
                </p>
                <p className='text-white'>
                    <MDBIcon icon="envelope" className="me-3" />
                    tammymackenzie@bell.net
                </p>
                <p className='text-white'>
                    <MDBIcon icon="home" className="me-2" />
                    General Inquires
                </p>
                <p className='text-white'>
                    <MDBIcon icon="print" className="me-3" />
                    president@burlingtontrackandfield.org
                </p>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        </section>

        <div className='text-center p-4 text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}>
            © 2021 Copyright Burlington Track and Field Club
        </div>

        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div className="centerSocials">
                <a href='' className='me-4 text-reset text-white'>
                    <MDBIcon icon="facebook-f" className='text-white'/>
                </a>
                <a href='' className='me-4 text-reset'>
                    <MDBIcon icon="twitter" className='text-white'/>
                </a>
                <a href='' className='me-4 text-reset'>
                    <MDBIcon icon="google" className='text-white'/>
                </a>
                <a href='' className='me-4 text-reset'>
                    <MDBIcon icon="instagram" className='text-white'/>
                </a>
                <a href='' className='me-4 text-reset'>
                    <MDBIcon icon="linkedin" className='text-white'/>
                </a>
                <a href='' className='me-4 text-reset'>
                    <MDBIcon icon="github" className='text-white'/>
                </a>   
            </div>
        </section>
    </MDBFooter>
  );
}

export default Footer

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
                    <a href='Junior/' className='text-white'>
                        Junior
                    </a>
                </p>
                <p>
                    <a href='Distance/' className='text-white'>
                        Senior Distance
                    </a>
                </p>
                <p>
                    <a href='Sprint/' className='text-white'>
                        Senior Sprint
                    </a>
                </p>
                </MDBCol>

                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4 text-white'>Useful links</h6>
                <p>
                    <a href='Programs/' className='text-white'>
                        Registration
                    </a>
                </p>
                <p>
                    <a href='Results/' className='text-white'>
                        Results
                    </a>
                </p>
                <p>
                    <a href='Contact/' className='text-white'>
                        Contact
                    </a>
                </p>
                <p>
                    <a href='Directors/' className='text-white'>
                        Board of Directors
                    </a>
                </p>
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4 text-white'>Contact</h6>
                <p className='text-white'>
                    Head Coach - Tammy Mackenzie
                </p>
                <p className='text-white'>
                    <MDBIcon icon="envelope" className="me-1" />
                    tammymackenzie@bell.net
                </p>
                <p className='text-white'>
                    General Inquires
                </p>
                <p className='text-white'>
                    <MDBIcon icon="envelope" className="me-1" />
                    president@burlingtontrackandfield.org
                </p>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        </section>

        <div className='text-center p-4 text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}>
            © 2025 Copyright Burlington Track and Field Club
        </div>

        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' style={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}>
            <div className="centerSocials">
                <a href='https://www.burlingtontrackandfield.org/' className='me-4 text-reset text-white'>
                    <MDBIcon icon="desktop" className='text-white'/>
                </a>
                <a href='Results/' className='me-4 text-reset'>
                    <MDBIcon icon="folder" className='text-white'/>
                </a>
                <a href='mailto:president@burlingtontrackandfield.org' className='me-4 text-reset'>
                    <MDBIcon icon="envelope" className='text-white'/>
                </a>
                <a href='https://www.instagram.com/burlington_track_field_club/' className='me-4 text-reset'>
                    <MDBIcon icon="instagram" className='text-white'/>
                </a> 
            </div>
        </section>
    </MDBFooter>
  );
}

export default Footer

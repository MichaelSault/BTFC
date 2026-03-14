import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaDesktop, FaEnvelope, FaFolder, FaInstagram } from "react-icons/fa";

import '../App.css';

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="text-center text-lg-start text-muted bg-dark text-white">

      <section className="p-4">
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">

            <Col lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-white">
                Burlington Track and Field
              </h6>
            </Col>

            <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-white">Programs</h6>
              <p><a href="/junior/" className="text-white">Junior Group</a></p>
              <p><a href="/distance/" className="text-white">Senior Distance</a></p>
              <p><a href="/sprint/" className="text-white">Senior Sprint</a></p>
            </Col>

            <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-white">Useful links</h6>
              <p><a href="/programs/" className="text-white">Registration</a></p>
              <p><a href="/race-results/" className="text-white">Results</a></p>
              <p><a href="/contact-us/" className="text-white">Contact</a></p>
              <p><a href="/board-of-directors/" className="text-white">Board of Directors</a></p>
            </Col>

            {/* Contact */}
            <Col md="6" lg="3" xl="3" className="mx-auto mb-md-0 mb-4" >
              <h6 className="text-uppercase fw-bold mb-4 text-white">Contact</h6>
              <p className="text-white" style={{marginBottom: '.2em'}}>Head Coach - Tammy Mackenzie</p>
              <a className="text-white" href="mailto:tammymackenzie@bell.net">
                <FaEnvelope className="me-1" />
                tammymackenzie@bell.net
              </a>
              <br/><br/>
              <p className="text-white" style={{marginBottom: '.2em'}}>General Inquiries</p>
              <a className="text-white" href="mailto:president@burlingtontrackandfield.org">
                <FaEnvelope className="me-0" />
                president@burlingtontrackandfield.org
              </a>
            </Col>

          </Row>
        </Container>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.02)", color:"white"}}>
        © 2026 Copyright Burlington Track and Field Club
      </div>

      <section className="d-flex justify-content-center justify-content-lg-between p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}>
        <div className="centerSocials">
          <a href="https://www.burlingtontrackandfield.org/" className="me-4 text-white">
            <FaDesktop />
          </a>
          <a href="/race-results/" className="me-4 text-white">
            <FaFolder />
          </a>
          <a href="mailto:president@burlingtontrackandfield.org" className="me-4 text-white">
            <FaEnvelope />
          </a>
          <a href="https://www.instagram.com/burlington_track_field_club/" className="me-4 text-white">
            <FaInstagram />
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer

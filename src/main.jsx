import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './index.css'

import Home from './components/home.component.jsx';

ReactDOM.createRoot(document.getElementById('navBar')).render(
  <React.StrictMode>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">BTFC</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="programs">Programs</Nav.Link>
          <Nav.Link href="register">Registration</Nav.Link>
          <Nav.Link href="contact">Contact Us</Nav.Link>
          <Nav.Link href="results">Results</Nav.Link>
          <Nav.Link href="board">Board of Directors</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)


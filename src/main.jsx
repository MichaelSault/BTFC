import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//use hashRouter temporarily as browserrouter does not work with gh_pages
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './index.css'

import Home from './components/home.component.jsx';
import Programs from './components/programs.component.jsx';
import Junior from './components/programs/junior.component.jsx';
import Distance from './components/programs/distance.component.jsx';
import Sprint from './components/programs/sprint.component.jsx';

import Registration from './components/registration.component.jsx';
import Contact from './components/contact.component.jsx';
import Results from './components/results.component.jsx';
import GRResults from './components/events/grResults.component.jsx';
import KLResults from './components/events/klResults.component.jsx';

import Store from './components/store.component.jsx';

import Directors from './components/directors.component.jsx';

import Footer from './components/socialFooter.component.jsx';

ReactDOM.createRoot(document.getElementById('navBar')).render(
  <React.StrictMode>
    <Navbar bg="dark" data-bs-theme="dark" className='desktopOnly'>
      <Container>
        <Navbar.Brand href="/">BTFC</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/programs">Programs</Nav.Link>
          <Nav.Link href="/registration">Registration</Nav.Link>
          <Nav.Link href="/race-results">Results</Nav.Link>
          <Nav.Link href="/store">Store</Nav.Link>
          <Nav.Link href="/contact-us">Contact Us</Nav.Link>
          <Nav.Link href="/board-of-directors">Board of Directors</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    <Navbar bg="dark" data-bs-theme="dark" className='mobileOnly'>
      <Container>
        <Navbar.Brand href="/">BTFC</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/programs">Programs</Nav.Link>
          <Nav.Link href="/registration">Register</Nav.Link>
          <Nav.Link href="/race-results">Results</Nav.Link>
          <Nav.Link href="/store">Store</Nav.Link>
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
        <Route path='/programs' element={<Programs/>}/>
        <Route path='/junior' element={<Junior/>}/>
        <Route path='/distance' element={<Distance/>}/>
        <Route path='/sprint' element={<Sprint/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
        <Route path='/race-results' element={<Results/>}/>
        <Route path='/gordrusby' element={<GRResults/>}/>
        <Route path='/kenlake' element={<KLResults/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/board-of-directors' element={<Directors/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  </React.StrictMode>

  
)


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';

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
          <Nav.Link href="#/programs">Programs</Nav.Link>
          <Nav.Link href="#/register">Registration</Nav.Link>
          <Nav.Link href="#/results">Results</Nav.Link>
          <Nav.Link href="#/store">Store</Nav.Link>
          <Nav.Link href="#/contact">Contact Us</Nav.Link>
          <Nav.Link href="#/directors">Board of Directors</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    <Navbar bg="dark" data-bs-theme="dark" className='mobileOnly'>
      <Container>
        <Navbar.Brand href="/">BTFC</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#/programs">Programs</Nav.Link>
          <Nav.Link href="#/register">Register</Nav.Link>
          <Nav.Link href="#/results">Results</Nav.Link>
          <Nav.Link href="#/store">Store</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Junior' element={<Junior />}/>
        <Route path='/Distance' element={<Distance />}/>
        <Route path='/Sprint' element={<Sprint />}/>
        <Route path='/Programs' element={<Programs/>}/>
        <Route path='/Junior' element={<Junior/>}/>
        <Route path='/Distance' element={<Distance/>}/>
        <Route path='/Sprint' element={<Sprint/>}/>
        <Route path='/Register' element={<Registration/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Results' element={<Results/>}/>
        <Route path='/GordRusby' element={<GRResults/>}/>
        <Route path='/KenLake' element={<KLResults/>}/>
        <Route path='/Store' element={<Store/>}/>
        <Route path='/Directors' element={<Directors/>}/>
      </Routes>
      <Footer/>
    </HashRouter>
    
  </React.StrictMode>

  
)


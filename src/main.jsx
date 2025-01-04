import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import components
import Home from './components/home.component.jsx';

import MenuAppBar from './components/menuBar.component.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <> 
    <MenuAppBar/>
      <React.StrictMode>
        
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
  </>
)
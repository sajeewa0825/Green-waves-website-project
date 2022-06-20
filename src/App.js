import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import { Bars } from  'react-loader-spinner'

import Nav from './componet/Nav/Nav';
import Footer from './componet/Footer/Footer';
import Home from './componet/Homepage/Home';
import Event from './componet/section/sec'
import WhatWeDo from './componet/WhatWeDo/WhatWedo';
import OurTeam from './componet/OurTeam/OurTeam';


function App() {


  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

    }, 2000)
  }, [])


  return (
    <div className='App' >
      {
        loading ?
          <div className='spiner'>
            <Bars heigth="100" width="2000" color="green" ariaLabel="loading-indicator" className="spiner" />
          </div>
          :
          <div>
            <BrowserRouter>
              <Nav />
              <Routes>
                <Route path='Time' element={<Event/>} />
                <Route path='work' element={<WhatWeDo/>} />
                <Route path='about' element={<OurTeam/>} />
                <Route path='/' element={<Home />} />
              </Routes>
              <Footer/>
            </BrowserRouter>
          </div>
      }
    </div>
  );
}

export default App;
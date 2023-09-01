import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './pages/About'
import New from './components/New'
import HomeSection from './components/HomeSection'
import Testimonial from './components/Testimonial'
import Service from './components/Service'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div id='hide-overflow'>
      <BrowserRouter>
      <div className="w-full max-w-[1100px] mx-auto">
        <Navbar />
        </div>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>

  );     
}

export default App
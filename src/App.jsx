import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './pages/About'
import New from './components/New'
import HomeSection from './components/HomeSection'

const App = () => {
  return (
    <div id='hide-overflow'>
      <div className="w-full max-w-[1100px] mx-auto">
        <Navbar />
        <Hero />
      </div>
      <div className='w-full'>
        <HomeSection/>
      </div>
      <New />
    </div>
  );     
}

export default App
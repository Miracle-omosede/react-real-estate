import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './pages/About'

const App = () => {
  return (
    <div className='w-full max-w-[1100px] mx-auto'>
        <Navbar/>
        <Hero/>
        <About/>
    </div>
  )
}

export default App
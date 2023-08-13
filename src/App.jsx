import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className='w-full max-w-[1100px] mx-auto'>
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default App
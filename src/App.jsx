import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './pages/About'
import New from './components/New'

const App = () => {
  return (
    <div>
      <div className='w-full'>
      <Navbar/>
      <Hero/>
      <New/>
      {/* <About/> */}
      </div>
 
    </div>
  )     
}

export default App
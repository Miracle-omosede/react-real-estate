import React from 'react'
import villa from "../images/villa.jpg"
import Aboutbody from '../components/Aboutbody'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <div className='flex'>
        <div className='relative w-full h-full'>
          <img src={ villa } alt="" className='absolute top-0 right-0 w-full h-[700px] object-cover' />
          <div className='image-overflow'/>
          {/* <div className='w-full h-[700px] text-white absolute flex items-center justify-bottom bottom-0 left-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, beatae magnam. Natus ea, ipsam aliquid aut in quas. Ratione nisi quas a omnis hic consequuntur harum saepe excepturi sint eaque eligendi beatae id laboriosam perspiciatis
          </div> */}

        </div>
        <div>
        <div className='absolute bottom-24 left-0 text-white w-full px-5 md:px-56 font-poppins' > 
            <h1 className='md:w-[700px] text-4xl font-semibold my-5'> Accusamus maiores fugiat, est recusandae</h1>
            <p id='header-title' className='md:w-[600px] text-xl '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem eaque sunt vero nam quidem excepturi quo commodi repellat quos esse!</p>
          </div>
        </div>
      </div>

      <div className='bg-black h-screen w-full'></div>
      <Aboutbody/>
      <Footer/>
    </div>
  )
}

export default About
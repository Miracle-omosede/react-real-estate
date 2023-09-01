import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import New from '../components/New'
import HomeSection from '../components/HomeSection'
import Testimonial from '../components/Testimonial'
import Service from '../components/Service'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <div id="hide-overflow">
        <div className="w-full max-w-[1100px] mx-auto">
          <Navbar />
          <Hero />
        </div>
        <div className="w-full">
          <HomeSection />
          <Service />
        </div>
        <New />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
}

export default Home
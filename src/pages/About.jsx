import React from 'react'
import Vrlady from '../images/virtualtour.png'

const About = () => {
  return (
    <div className="wrapper flex flex-col w-full h-screen overflow-hidden relative">
      {/* --Heading--- */}
      <div className="w-full flex flex-col justify-center items-center">
        <div className="font-Bricolage flex flex-col w-3/4 justify-start items-center">
          <h4 className="text-[#6e5031] text-[4rem] font-bold tracking-tighter capitalize">
            About us
          </h4>
          <h1
            className="capitalize text-[3rem] text-center"
            style={{ lineHeight: 1.2 }}
          >
            Elevating Real Estate Experiences: Introducing Lyfewide, Your
            Trusted Partner.
          </h1>
        </div>
      </div>

      <div className="flex flex-row ml-32">
        <div className="flex flex-col w-full h-auto font-Montserrat font-[400] justify-start items-start">

          {/* <h4 className="w-[500px] font-[500] capitalize text-4xl">
            Lyfewide guides you on a 3D virtual tour of your dream home.
          </h4> */}
        </div>

        <div className="absolute -right-10 w-[850px] bottom-0">
          <img src={Vrlady} alt="vr-lady" />
        </div>
      </div>
    </div>
  );
}

export default About
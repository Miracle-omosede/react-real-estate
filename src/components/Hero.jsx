import React from 'react'
import HeaderImg from '../images/appartment2.jpg';
import fullBuilding from '../images/appartment1.jpg';

const Hero = () => {
  return (
    <div className="h-screen w-full bg-[#FCFBF4] relative">
      <div className="relative w-full h-full">
        {/* --img container-- */}
        <img
          src={HeaderImg}
          alt="Header image"
          className="relaive w-full object-cover h-[500px]"
        />

        <div className="flex flex-row text-[40px] absolute right-0">
          <span className="bg-[#6e5031] py-3 cursor-pointer flex items-center justify-center px-5 text-white">
            <i class="ri-arrow-left-s-line"></i>
          </span>
          <span className="bg-[#6e5031] py-3 cursor-pointer flex items-center justify-center px-5 text-white">
            <i class="ri-arrow-right-s-line"></i>
          </span>
        </div>
      </div>
      <div className="bg-[#6e5031] absolute w-[500px] h-[200px] bottom-[130px] left-24">
        <div className="relative flex flex-row text-white gap-4 p-10 font-Bricolage">
          <div className="flex w-full h-full items-center justify-center font-Montserrat font-semibold">
            <h4 className="text-[6rem]">01.</h4>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-xl">
              Unlock Your Dream Space: Discover Android-Powered Homes and
              Offices with a Trusted Partner.
            </p>
          </div>
        </div>
      </div>

      {/* second section */}
        
    </div>
  );
}

export default Hero
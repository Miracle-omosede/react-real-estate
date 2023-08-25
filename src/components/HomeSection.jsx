import React from 'react'
import app1 from "../images/appartment4.jpg"
import app2 from "../images/appartment5.jpg"
import app3 from "../images/appartment6.jpg"

const HomeSection = () => {
  return (
    <div className="mt-56 bg-gray-200 w-full py-28">
      <div className="grid max-w-[1100px] mx-auto  grid-cols-12 h-full">
        <div className="col-span-7 h-full">
          <div className="flex flex-row gap-4 h-full">
            <div className="grid grid-rows-6 gap-6 h-full">
              <div className="row-span-3">
                <img
                  src={app2}
                  alt=""
                  className="w-[440px] h-[250px] object-cover rounded-xl"
                />
              </div>
              <div className="row-span-3">
                <img
                  src={app1}
                  alt=""
                  className="w-[440px] h-[250px] object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="flex h-full justify-center items-center">
              <img
                src={app3}
                alt=""
                className="w-[340px] h-[190px] object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
        {/* <div className='col-span-6'>
                <div className='grid grid-cols-12 gap-3'>
                    <div className='col-span-6'>
                    <img src={app2} alt="" />
                    </div>
                    <div className='col-span-6'>
                        <img src={app1} alt="" />
                    </div>
                </div>
                <div className='grid grid-cols-12 gap-3'>
                    <div  className='col-span-6'>
                        <img src={app3} alt="" />
                    </div>
                    <div  className='col-span-6 flex flex-col items-center justify-start'>
                        <h1>
                            Innovation
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque impedit provident magni illum quaerat autem quisquam facilis est eum reprehenderit.
                        </p>
                    </div>
                </div>
            </div> */}
        <div className="col-span-5 flex flex-col font-poppins justify-center items-end pl-5 gap-4 text-right">
          <h1 className="text-5xl font-bold uppercase">Living Spaces Designed With<br/> <span className='text-[#6E5031]'>Perfection</span></h1>
          <p className='text-lg w-3/4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit recusandae assumenda quia beatae debitis hic rem molestiae sint harum. In beatae culpa delectus! Asperiores id aperiam perferendis libero at praesentium?</p>
          <button className='btn flex items-center justify-center gap-2 uppercase font-semibold text-2xl'>
            <span>
            <i class="ri-arrow-left-s-line"></i>
            </span>
            <span>learn more</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeSection
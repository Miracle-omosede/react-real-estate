// import React from 'react'
// import AppartmentSlider from '../components/AppartmentSlider'

// const Appartments = () => {

//   const[ title, subtitle ] = products;
//   return <div>
//     <div className="container mx-auto">
//       <div>
//         <h2> {title} </h2>
//         <p> { subtitle} </p>
//       </div>

//       {/* --slider--- */}
//     </div>
//   </div>
// }

// export default Appartments

import React from "react";
import NewItemsSlider from "../components/NewItemsSlider";
import interior2 from "../images/interior2.jpg";
import { FaBath, FaBed, FaHome, FaVectorSquare } from "react-icons/fa";
import sellerAvatar from "../images/avatar1.jpg";
import { BsTelephoneForward } from "react-icons/bs";
import house from "../video/house.mp4";
import Footer from "../components/Footer";

const Appartments = () => {
  return (
    <div className="relative mt-40">
      {/* <h1 className='text-4xl font-poppins'>Appartments</h1> */}

      <div className="grid grid-cols-12 font-poppins">
        <div className="md:col-span-6 col-span-12 flex w-full justify-center items-center">
          <div className="px-10">
            <h1 className="md:text-4xl text-2xl font-semibold">Recent</h1>
            <h1 className="md:text-6xl text-3xl font-semibold text-gray-400">
              Appartments.
            </h1>
          </div>
        </div>
        <div className="md:col-span-6 col-span-12 my-10 px-10">
          <NewItemsSlider />
        </div>
      </div>
      <div className="font-poppins mt-16">
        <div className="flex items-center justify-center w-full my-10">
          <h1 className="md:text-5xl text-2xl text-gray-500 font-semibold">
            <span className="text-[red]">See</span> Features.
          </h1>
        </div>

        <div>
          <div className="relative flex  w-full">
            <img
              src={interior2}
              alt=""
              className="w-full h-[500px] object-cover"
              style={{
                zIndex: -9,
              }}
            />
          </div>
          <div className="grid max-w-[1200px] mx-auto grid-cols-12 -mt-32 mb-10">
            <div className="col-span-12 md:col-span-8 bg-black w-full">
              <div className=" flex md:flex-row flex-col md:items-center md:justify-between md:mx-20 mx-6 h-[200px] bg-black text-gray-400 justify-center  md:gap-1 gap-3 ">
                <div className="flex md:items-center md:justify-between gap-2">
                  <span className="text-xl">
                    <FaBed></FaBed>
                  </span>
                  Beds &#8226;<span>2 </span>
                </div>
                <div className="flex md:items-center md:justify-between gap-2">
                  <span className="text-xl">
                    <FaBath />
                  </span>
                  Baths &#8226;<span>4 </span>
                </div>
                <div className="flex md:items-center md:justify-between gap-2">
                  <span className="text-xl">
                    <FaHome />
                  </span>
                  Area &#8226;
                  <span>
                    138 <sup>2</sup>
                  </span>
                </div>
                <div className="flex md:items-center md:justify-between gap-2">
                  <span className="text-xl">
                    <FaVectorSquare />
                  </span>
                  Availibility &#8226;
                  <span>
                    230<sup>2</sup>{" "}
                  </span>
                </div>
              </div>
              <div className="bg-gray-300 h-[900px]">
                <div className="grid grid-cols-3 col-span-3 py-10 md:px-20 px-6">
                  <div className="md:col-span-1 text-xl font-semibold md:py-0 py-5">
                    Description
                  </div>
                  <div className="md:col-span-2 col-span-3">
                    <p className="text-sm">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptate maxime voluptatem dicta saepe totam itaque
                      dolore, at eligendi. Maxime temporibus id illum
                      praesentium eveniet tenetur! Nesciunt rerum architecto
                      accusantium ducimus eum natus maiores neque recusandae
                      impedit exercitationem, quia, dolorem ea assumenda
                      voluptate amet pariatur eveniet minima sit optio a aliquam
                      fugit.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 py-10 px-6 md:px-20">
                  <div className="md:col-span-1 col-span-3 text-xl md:py-0 py-5 font-semibold">
                    Amenities
                  </div>
                  <div className="md:col-span-2 col-span-3">
                    <div className="flex flex-row text-sm w-full items-center justify-between gap-5 md:gap-0">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-row gap-2">
                          <span>+</span>
                          <span>Elevator</span>
                        </div>
                        <div className="flex flex-row gap-2">
                          <span>+</span>
                          <span>Cable TV</span>
                        </div>
                        <div className="flex flex-row gap-2">
                          <span>+</span>
                          <span>Wifi</span>
                        </div>
                        <div className="flex flex-row gap-2">
                          <span>+</span>
                          <span>IoT</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-row gap-2">
                          <span>+</span>
                          <span>Free Parking</span>
                        </div>
                        <div className="flex flex-row gap-2">
                          <span>+</span>
                          <span>Pets</span>
                        </div>
                        <div className="flex flex-row gap-2">
                          <span>+</span>
                          <span>Gym</span>
                        </div>
                        <div className="flex flex-row gap-2">
                          <span>+</span>
                          <span>Pool</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-row gap-2">
                          <span>+</span>
                          <span>Coffee</span>
                        </div>
                        <div className="flex flex-row gap-2">
                          <span>+</span>
                          <span>Dishes and silverware</span>
                        </div>
                        <div className="flex flex-row gap-2">
                          <span>+</span>
                          <span>Refridgirator</span>
                        </div>
                        <div className="flex flex-row gap-2">
                          <span>+</span>
                          <span>Microwave</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 py-10 px-6 md:px-20">
                  <div className="col-span-1 text-xl font-semibold">Video</div>
                  <div className="col-span-2">
                    <div className="overlay"></div>
                    <div className="relative">
                    <div className="absolute my-8 mr-10 flex gap-2 shadow-xl text-white bottom-0 right-0 button-color py-2 cursor-pointer px-4 rounded-full">
            <span>
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9996 1.872C14.7851 1.872 17.2886 2.8335 18.9746 4.563C20.3619 4.74342 21.6706 5.30994 22.7516 6.198C20.8601 2.223 16.9421 0 11.9996 0C7.12463 0 3.17963 2.22 1.26562 6.183C2.25673 5.37407 3.43901 4.83329 4.69913 4.6125C6.35363 2.808 8.96063 1.872 11.9996 1.872Z"
                  fill="white"
                />
                <path
                  d="M18.0004 18C16.4396 18.0018 14.9399 17.3935 13.8214 16.305L13.8184 16.302C13.6891 16.2049 13.5504 16.1209 13.4044 16.0515C12.9647 15.8474 12.485 15.7444 12.0004 15.75C11.3794 15.75 10.9069 15.9045 10.5979 16.0515C10.4513 16.1209 10.3121 16.2048 10.1824 16.302L10.1794 16.305C9.47408 16.9897 8.61138 17.4906 7.66713 17.7637C6.72287 18.0369 5.72597 18.0738 4.76409 17.8713C3.80221 17.6689 2.9048 17.2332 2.15078 16.6026C1.39676 15.9719 0.809212 15.1657 0.43981 14.2548C0.0704071 13.3439 -0.0695399 12.3562 0.0322737 11.3785C0.134087 10.4009 0.474543 9.46317 1.02371 8.64791C1.57287 7.83266 2.31392 7.16482 3.18169 6.7031C4.04947 6.24139 5.01739 5.99994 6.00035 6H18.0004C19.5917 6 21.1178 6.63214 22.243 7.75736C23.3682 8.88258 24.0004 10.4087 24.0004 12C24.0004 13.5913 23.3682 15.1174 22.243 16.2426C21.1178 17.3679 19.5917 18 18.0004 18Z"
                  fill="white"
                />
              </svg>
            </span>
            <span>Explore</span>
          </div>
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="\ object-cover rounded-lg h-80 w-full md:"
                    >
                      <source src={house} type="video/mp4"></source>
                    </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 overflow-hidden w-full bg-[white] h-[600px] shadow-lg p-10 flex justify-center text-center">
              <div className="flex flex-col">
                <div className="flex flex-col justify-center">
                  <h1 className="uppercase text-green-800 font-semibold">
                    Rent per year
                  </h1>

                  {/* actual rent price */}
                  <span className="font-semibold text-4xl">N17,500,000</span>
                  <span className="w-full flex items-center justify-center mt-10 mb-2">
                    <img
                      src={sellerAvatar}
                      className="w-20 h-20 rounded-full"
                      alt=""
                    />
                  </span>
                  <span className="flex flex-col">
                    <span>John Clarke</span>
                    <span className="text-xs text-gray-500">
                      Property Agent
                    </span>
                  </span>

                  <div className="flex flex-col my-10 gap-4">
                    <div className="flex justify-between w-full items-center text-sm">
                      <span className="text-gray-500">Email:</span>
                      <span>erosalight@gmail.com</span>
                    </div>
                    <div className="flex justify-between w-full items-center text-sm">
                      <span className="text-gray-500">Phone:</span>
                      <span>08155667956</span>
                    </div>
                    <div className="flex justify-between w-full items-center text-sm">
                      <span className="text-gray-500">Language:</span>
                      <span>English</span>
                    </div>
                  </div>

                  <button className="btn bg-green-500 text-white hover:text-black">
                    <span>
                      <BsTelephoneForward />
                    </span>
                    <span>Contact us</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Appartments;

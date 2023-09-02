import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css'; // Import the bundled CSS file
import { products } from "../data";
import { HiPlus } from "react-icons/hi"; // Correct the import statement

const AppartmentSlider = () => {
  const { pages } = products;

  return (
    <Swiper
      navigation={ true } // Add navigation options
      pagination={{ clickable: true }} 
      className='productSlider'// Add pagination options
    >
      {pages.map((page, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px]'>
              {page.productList.map((product, index) => {
                const { image, name, price, oldPrice } = product;
                return (
                  <div key={index} className='w-full max-w-[290px] h-[380px] text-left'> {/* Add a key prop */}
                    <div className='border hover:border-accent'>
                      <img src={image} alt='' /> {/* Fix the image source */}
                      <div>
                            <HiPlus className='text-xl text-primary' />
                      </div>
                    </div>
                     <div>
                     <div> {price} </div>
                      <div> {oldPrice} </div>
                     </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default AppartmentSlider;

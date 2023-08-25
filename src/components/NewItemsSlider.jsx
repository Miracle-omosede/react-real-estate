import React from 'react';
import { AiFillAndroid } from "react-icons/ai"
import { FaBath, FaWifi } from "react-icons/fa"
import {MdElectricBolt } from "react-icons/md"
import {GrLocation } from "react-icons/gr"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

// import data
import { newInStore } from '../data';

const NewItemsSlider = () => {
  return (
 <Swiper grabCursor={true} breakpoints={{
    320: {
        slidesPerView: 2,
        spaceBetween: 18,
    },
    768: {
        slidesPerView: 3,
        spaceBetween: 20,
    }
 }}>
    {newInStore.products.map((product, index) => {
      return <SwiperSlide key={index} className='max-w-[290px] h-[400px]'>
        <div className='h-full w-full relative'>
            <img src={product.image.type} className='rounded-xl h-[300px] md:h-[400px] w-[300px] object-cover' alt="" />
            <div className='font-medium capitalize py-5 flex items-center gap-2'>
                <GrLocation/>
               <span> {product.name}</span></div>
            {/* <div className='flex flex-row w-full pt-3'>
                <span className='flex flex-wrap gap-2'>
                    <button className='btn flex items-center justify center gap-2 text-sm bg-gray-200 px-2 py-1 border-gray-400 rounded-full border '>
                        <span>
                            <AiFillAndroid />
                        </span>
                        <span>
                            Android
                        </span>
                    </button>
                    <button className='btn flex items-center justify center gap-2 text-sm bg-gray-200 px-2 py-1 border-gray-400 rounded-full border '>
                        <span>
                            <FaBath />
                        </span>
                        <span>
                            Bath
                        </span>
                    </button>
                    <button className='btn flex items-center justify center gap-2 text-sm bg-gray-200 px-2 py-1 border-gray-400 rounded-full border '>
                        <span>
                            <FaWifi/>
                        </span>
                        <span>
                            WiFi
                        </span>
                    </button>
                    <button className='btn flex items-center justify center gap-2 text-sm bg-gray-200 px-2 py-1 border-gray-400 rounded-full border '>
                        <span>
                            <MdElectricBolt />
                        </span>
                        <span>
                            Electric fence
                        </span>
                    </button>
                </span>
                <span></span>
                <span></span>
            </div> */}
        </div>
      </SwiperSlide>;
    })}
  </Swiper>
  )
};

export default NewItemsSlider;

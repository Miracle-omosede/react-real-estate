import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../slider.css"

import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';
import { testimonial } from '../data';

const TestimonialSlider = () => {
  return (
    <Swiper className='testimonialSlider' modules={[Navigation, Autoplay]} navigation={true}
    autoplay={true}>
      {testimonial.persons.map((person, index) => {
        // Destructure person
        const { avatar, name, occupation, message } = person;
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col min-h-[250px] font-poppins'>
              <div className='flex items-center gap-x-5 mb-9'>
                {/* Avatar */}
                <img src={avatar.type} className='w-20 h-20 rounded-full' alt="" />

                <div>
                {/* Name */}
                <h3 className='text-xl font-semibold'>{name}</h3>
                {/* Occupation */}
                <p className='text-gray-500'>{occupation}</p>
                <div>
              </div>

                </div>     
              </div>
                {/* Message */}
                <div className='text-lg max-w-[570px]'>{message}</div> 
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;

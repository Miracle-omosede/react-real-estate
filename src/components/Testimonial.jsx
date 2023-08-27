import React from 'react';
import image1 from '../images/smart-home.jpg'

import TestimonialSlider from './TestimonialSlider';

import { testimonial } from "../data";

const Testimonial = () => {
    // destructure testimonial
    const { image, title } = testimonial;

    return (
        <div className='mt-[5rem] md:mt-[20rem] px-10 mb-[10rem]  max-w-[1100px] mx-auto'>
            <div className="container mx-auto">
                <div>
                    {/* title */}
                    <h2 className='title mb-9 text-3xl md:text-5xl font-bold font-Bricolage uppercase w-full'> {title} </h2> 
                </div>
                <div className='flex flex-col lg:flex-row lg:gap-x-10 gap-y-2'>
                    <div className='lg:max-w-[50%] '>
                        {/* slider */}
                        <TestimonialSlider />
                    </div>

                    {/* image */}
                    <div className='order-1'>
                        <img src={ image1 } alt="" className='rounded-3xl' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;

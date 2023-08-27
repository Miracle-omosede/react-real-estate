import React from 'react';

import TestimonialSlider from './TestimonialSlider';

import { testimonial } from "../data";

const Testimonial = () => {
    // destructure testimonial
    const { image, title } = testimonial;

    return (
        <div className='mt-[5rem] md:mt-[20rem] px-10 mb-[10rem]'>
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row lg:gap-x-10 gap-y-2'>
                    <div className='lg:max-w-[50%]'>
                        {/* title */}
                        <h2 className='title mb-9 text-5xl font-bold font-Bricolage uppercase w-3/4'> {title} </h2>
                        {/* slider */}
                        <TestimonialSlider />
                    </div>

                    {/* image */}
                    <div className='order-1'>
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;

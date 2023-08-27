import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Logo from "../images/PRIMESTIX_HORIZONTAL LOGO.png"

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-10 px-10 md:px-20'>

        {/* --logo wrappper-- */}
        <div>
            <h1 className='font-semibold text-[22px] capitalize font-Bricolage text-[#664b2f]'>
               <img src= { Logo } className='w-[150px] h-[30px] object-cover' alt="" />
            </h1>
        </div>

        {/* --nav wrapper--  */}
        <div className='hidden md:flex items-center justify-between gap-16 '>
            {/* ----buttons----- */}
            <div>
                <ul className='font-Bricolage flex flex-row gap-4 font-[500] text-[17px]'>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Appartments</a></li>
                    <li><a href="#">What's New</a></li>
                </ul>
            </div>
            {/* ----icons------ */}
            <div className='flex gap-10 items-center justify-center text-[18px] font-[500]'>
                <span><i class="ri-search-line"></i></span>
                <span><i class="ri-menu-3-fill"></i></span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
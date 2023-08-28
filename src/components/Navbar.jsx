import React, { useState, useEffect }from 'react'
import 'remixicon/fonts/remixicon.css'

// import Logo 
import Logo from "../images/PRIMESTIX_HORIZONTAL LOGO.png"

// import icons
import { CgMenuRight, CgClose} from 'react-icons/cg'

// import data 
import { navigation } from "../data"

// import components
import NavMobile from "./NavMobile"

const Navbar = () => {
    const [bg, setBg] = useState (false);
    const [mobileNav, setMobileNav] = useState (false);

    useEffect (() => {
        window.addEventListener('scroll', ()=> {
            return window.scrollY > 50 ? setBg(true) : setBg(false);
        })
    })

  return (

    <header className={`${bg ?'bg-gray-200  py-4 lg:py-6' : 'bg-white'} fixed left-0 w-full md:px-[14rem] py-8 z-10 px-7 transition-all duration-200 font-semibold font-Bricolage`}>
        <div className="container mx-auto">
            <div className='flex justify-between items-center'>
                {/* logo */}
                <a href='#' alt=''>
                <img src= { Logo } className='w-[150px] h-[30px] object-cover' alt="" />
                </a>

                {/* menu icons
                 */}
                 <div onClick={() => setMobileNav(!mobileNav)} className='text-2xl text-black md:hidden lg:text-3xl cursor-pointer'>
                    {mobileNav ? <CgClose/> : <CgMenuRight />}
                 </div>

                 {/* nav */}
                 <nav className='hidden md:flex '>
                    <ul className='md:flex md:gap-x-5'>
                        {navigation.map((item, index) => {
                            return <li key={index}>
                                <a className='capitalize text- black hover:border-b transition-all ' href={item.href}>
                                    {item.name}
                                </a>
                            </li>
                        })}
                    </ul>
                 </nav>

                 {/* nav mobile */}
                 <div className={`${mobileNav ? 'left-0' : '-left-full'} md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all `}>
                    <NavMobile />
                 </div>
            </div>
        </div>
        
    </header>
    // <nav className='flex items-center justify-between py-10 px-10 md:px-20'>

    //     {/* --logo wrappper-- */}
    //     <div>
    //         <h1 className='font-semibold text-[22px] capitalize font-Bricolage text-[#664b2f]'>
    //            <img src= { Logo } className='w-[150px] h-[30px] object-cover' alt="" />
    //         </h1>
    //     </div>

    //     {/* --nav wrapper--  */}
    //     <div className='hidden md:flex items-center justify-between gap-16 '>
    //         {/* ----buttons----- */}
    //         <div>
    //             <ul className='font-Bricolage flex flex-row gap-4 font-[500] text-[17px]'>
    //                 <li><a href="#">About</a></li>
    //                 <li><a href="#">Appartments</a></li>
    //                 <li><a href="#">What's New</a></li>
    //             </ul>
    //         </div>
    //         {/* ----icons------ */}
    //         <div className='flex gap-10 items-center justify-center text-[18px] font-[500]'>
    //             <span><i class="ri-menu-3-fill"></i></span>
    //         </div>
    //     </div>
    // </nav>
  )
}

export default Navbar
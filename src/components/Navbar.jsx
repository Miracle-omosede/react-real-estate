import React, { useState, useEffect } from "react";
import 'remixicon/fonts/remixicon.css';
import Logo from "../images/PRIMESTIX_HORIZONTAL LOGO.png";
import { CgMenuRight, CgClose } from 'react-icons/cg';
import { navigation } from "../data";
import NavMobile from "./NavMobile";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  }, []);

  const handleLinkClick = () => {
    setMobileNav(false); // Close mobile navigation when a link is clicked
  };

  return (
    <header className={`${bg ? 'bg-gray-200 py-4 lg:py-6' : 'bg-white'} fixed left-0 w-full md:px-[14rem] py-8 z-10 px-7 transition-all duration-200 font-semibold font-Bricolage`}>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <a href='#' alt=''>
            <img src={Logo} className='w-[150px] h-[30px] object-cover' alt="" />
          </a>
          <div onClick={() => setMobileNav(!mobileNav)} className='text-2xl text-black md:hidden lg:text-3xl cursor-pointer'>
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>
          <nav className='hidden md:flex '>
            <ul className='md:flex md:gap-x-5'>
              {navigation.map((item, index) => {
                return <Link to={item.link}>
                <li key={index}>
                  <a className='capitalize text-black hover:border-b transition-all' href="#" onClick={handleLinkClick}>
                    {item.name}
                  </a>
                </li>
                </Link>
              })}
            </ul>
          </nav>
          <div className={`${mobileNav ? 'left-0' : '-left-full'} md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all `}>
            <NavMobile onLinkClick={handleLinkClick} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import { navLinks } from '@/constant/constant';
import { HiBars3BottomRight } from 'react-icons/hi2';

//define props type
type Props = {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {

  // State to track if the navbar background should change
  const [navBg, setNavBg] = useState(false);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Change background color when scrolled more than 90px
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    // Add event listener for scrolling
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed w-full h-[12vh] z-[10] transition-all duration-300 ${navBg ? 'bg-[#240b39]' : 'bg-transparent'}`}>
      <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto'>
        <Image
          src="/images/logo.png"
          alt="LOGO"
          width={170}
          height={170}
          className='ml-[-1.5rem] sm:ml-0'
        />

        {/* Nav links */}
        <div className='flex items-center space-x-10'>
          <div className='hidden lg:flex items-center space-x-8'>
            {navLinks.map((navLink) => (
              <Link key={navLink.id} href={navLink.url}>
                <p className='nav__link'>{navLink.label}</p>
              </Link>
            ))}
          </div>

          {/* Button */}
          <div className='flex items-center space-x-4'>
            <button className='md:px-10 md:py-3 px-8 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg'>
              Hire Me
            </button>

            {/* Burger icon */}
            <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;

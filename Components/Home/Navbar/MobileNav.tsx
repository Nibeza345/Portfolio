import { navLinks } from '@/constant/constant'
import React from 'react';
import Link from 'next/link';
import { CgClose } from 'react-icons/cg';

//props type
type Props ={
  showNav: boolean;
  closeNav: ()=>void;
}

const MobileNav = ({closeNav, showNav}:Props) => {
  
  // Use correct tailwind transition class
  const navOpen = showNav ? 'translate-x-0' : '-translate-x-full';
  
  return (
    <div>
      {/*Overlay */}
      {showNav && (
        <div className='fixed inset-0 z-[99] bg-black opacity-70 w-full h-screen' onClick={closeNav}></div>
      )}

      {/*Nav Links */}
      <div className={`fixed top-0 left-0 z-[10000] h-full w-[80%] sm:w-[60%] bg-[#0f0715] text-white transform transition-transform duration-500 ease-in-out ${navOpen}`}>
        
        <div className='flex flex-col items-start space-y-6 p-6'>
          {navLinks.map((navLink) => (
            <Link key={navLink.id} href={navLink.url}>
              <p className='nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]'>{navLink.label}</p>
            </Link>
          ))}
        </div>

        {/* Close button */}
        <CgClose className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer' onClick={closeNav} />
      </div>
    </div>
  );
}

export default MobileNav;

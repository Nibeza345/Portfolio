"use client" // to make sure we use hooks a component must be converted to a client component
import React, { useState } from 'react'
import Nav from "./Nav";
import MobileNav from './MobileNav';

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false)
  const showNavHandler = () => setShowNav(true)
  const closeNavHandler = () => setShowNav(false)

  return (
    <div>
        <Nav openNav={showNavHandler}/>
        <MobileNav showNav={showNav} closeNav={closeNavHandler}/>
    </div>
  )
}

export default ResponsiveNav
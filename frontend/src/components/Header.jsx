import React from 'react'
import { NavLink } from 'react-router-dom'
import { PiSuitcaseSimpleBold } from "react-icons/pi";

const Header = () => {
  return (
    <div className='head'>
    <header className="header">
      <span className="logo"><PiSuitcaseSimpleBold />Job board</span>
       <nav className="nav">
        <NavLink to="/jobs" end className={({isActive})=> isActive ? "active-nav":"nav-link"}>Jobs</NavLink>
        <NavLink to="/jobs/post" className={({isActive})=> isActive ? "active-nav":"nav-link"}>Post a Job</NavLink>
      </nav>
    </header></div>
  )
}

export default Header
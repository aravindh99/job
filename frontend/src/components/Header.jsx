import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsFillSuitcaseLgFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className='head'>
    <header className="header">
      <span className="logo"><BsFillSuitcaseLgFill />Job board</span>
       <nav className="nav">
        <NavLink to="/jobs" end className={({isActive})=> isActive ? "active-nav":"nav-link"}>Jobs</NavLink>
        <NavLink to="/jobs/post" className={({isActive})=> isActive ? "active-nav":"nav-link"}>Post a Job</NavLink>
      </nav>
    </header></div>
  )
}

export default Header
import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <div className='head'>
    <header className="header">
      <span className="logo"><img src="/senthuron.svg" alt="Logo" />Job board</span>
       <nav className="nav">
        <NavLink to="/jobs" end className={({isActive})=> isActive ? "active-nav":"nav-link"}>Jobs</NavLink>
        <NavLink to="/jobs/post" className={({isActive})=> isActive ? "active-nav":"nav-link"}>Post a Job</NavLink>
      </nav>
    </header></div>
  )
}

export default Header
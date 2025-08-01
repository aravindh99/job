import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='head'>
    <header className="header">
      <span className="logo">Job board</span>
       <nav className="nav">
        <Link to="/jobs" className="nav-link">Jobs</Link>
        <Link to="/jobs/post" className="nav-link">Post a Job</Link>
      </nav>
    </header></div>
  )
}

export default Header
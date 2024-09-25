import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav>
          <Link to="/">Home</Link>
          <Link to="/Resume">Resume</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Work">Work</Link>
    </nav>
    </div>
  )
}

export default Navbar

import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav className='flex text-xl flex-row justify-end gap-3 p-5'>
          <div>
          <Link to="/">Home</Link>
          </div>
          <div>
          <Link to="/Resume">Resume</Link>
          </div>
          <div>
          <Link to="/Contact">Contact</Link>
          </div>
          <div>
          <Link to="/Work">Work</Link>
          </div>
    </nav>
    </div>
  )
}

export default Navbar

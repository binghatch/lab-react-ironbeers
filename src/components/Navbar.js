import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar bg-primary'>
      <div className="container d-flex justify-content-center">
        <Link to="/">
          <i className="bi bi-house-door-fill fs-2 text-light"></i>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav_container'>
      <div className="nav_wrapper">
<nav>
  <div className="logo">
    <h3>
      Uncover
    </h3>
  </div>
  <div className="links">
    <Link className='link' to="/?cat=technology">Technology</Link>
    <Link className='link' to="/?cat=art">Art</Link>
    <Link className='link' to="/?cat=music">Music</Link>
    <Link className='link' to="/?cat=food">Food</Link>
    <span>
      <p>
        John
      </p>
      <Link className='link' to="/">Logout</Link>
    </span>
<div className="write">
<Link className='link' to="/write">Write</Link>
</div>
  </div>
</nav>
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <React.Fragment>
      <NavLink to="/about" className={({ isActive }) =>
        isActive ? 'link-active' : ''
      }>About</NavLink>
      <Link to="/">Home</Link>
    </React.Fragment>
  )
}

export default Navigation
import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/jokes'>Jokes</NavLink>
    <NavLink to='/create-joke'>Create Jokes</NavLink>
  </nav>
)

export default Nav

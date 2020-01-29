import React from 'react'
import { NavLink } from 'react-router-dom'

const AuthNav = (
  <NavLink to='/create-joke'>Create Jokes</NavLink>
)

const Nav = (props) => (
  <nav>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/jokes'>Jokes</NavLink>
    <NavLink to='/get-jokes'>Get a Random Joke</NavLink>
    {props.user ? AuthNav : ''}
  </nav>
)

export default Nav

import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

const AuthNav = (
  <Fragment>
    <NavLink to='/create-joke'>Create Jokes</NavLink>
    <NavLink to='/favorites'>Saved Jokes</NavLink>
  </Fragment>
)

const Nav = (props) => (
  <nav>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/jokes'>User Jokes</NavLink>
    <NavLink to='/get-jokes'>Get a Random Joke</NavLink>
    {props.user ? AuthNav : ''}
  </nav>
)

export default Nav

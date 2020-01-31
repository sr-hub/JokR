import React, { Fragment } from 'react'
// import { NavLink } from 'react-router-dom'

const AuthNav = (
  <Fragment>
    <li className="nav-item">
      <a className="nav-link" href='#/create-joke'>Create Jokes</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href='#/favorites'>Saved Jokes</a>
    </li>
  </Fragment>
)

const Nav = (props) => (
  <nav>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link" href='#/'>Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href='#/jokes'>User Jokes</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href='#/get-jokes'>Get a Random Joke</a>
      </li>
      {props.user ? AuthNav : ''}
    </ul>
  </nav>
)

export default Nav

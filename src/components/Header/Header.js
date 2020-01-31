import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const navStyles = {
  'font-size': '15px'
}

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#change-password" style={navStyles}>Change Password</Nav.Link>
    <Nav.Link href="#sign-out" style={navStyles}>Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up" style={navStyles}>Sign Up</Nav.Link>
    <Nav.Link href="#sign-in" style={navStyles}>Sign In</Nav.Link>
  </Fragment>
)

// const alwaysOptions = (
//   <Fragment>
//     <Nav.Link href="https://sr-hub.github.io/JokR-front-end/#/" style={navStyles}>Home</Nav.Link>
//   </Fragment>
// )

const Header = ({ user }) => (
  <Navbar bg="info" variant="dark" expand="md">
    <Navbar.Brand href="#">
      JokR
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header

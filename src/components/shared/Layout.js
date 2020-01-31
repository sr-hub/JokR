import React from 'react'

import Nav from './Nav'
// import AuthNav from './AuthNav'
import Footer from './Footer'

const Layout = (props) => (
  <div>
    <Nav user={props.user}/>
    {props.children}
    <Footer />
  </div>
)

export default Layout

import React from 'react'
import Layout from '../shared/Layout'

const Home = (props, { user }) => (
  <Layout user={props.user}>
    <div className="jumbotron" style={{ backgroundColor: 'transparent' }}>
      <h1 className="display-4">Welcome to JokR!</h1>
      <p className="lead">...the WebApp that allows you to find, create, and share jokes!</p>
      <hr className="my-4" />
      <p> Use the navigation bar above to get started.</p>
    </div>
  </Layout>
)

export default Home

import React, { Fragment, useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'

const Joke = props => {
  const [joke, setJoke] = useState(null)
  const [deleted, setDeleted] = useState(false)
  const { user } = props

  useEffect(() => {
    axios(`${apiUrl}/jokes/${props.match.params.id}`)
      .then(res => setJoke(res.data.joke))
      .catch(console.error)
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/jokes/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(console.log(props))
      .then(() => setDeleted(true))
      .catch(console.error)
  }

  if (!joke) {
    return <p>Loading...</p>
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/', state: { msg: 'Joke successfully deleted!' } }
    } />
  }

  const authenticatedOptions = (
    <Fragment>
      <button onClick={destroy}>Delete Joke</button>
      <Link to={`/jokes/${props.match.params.id}/edit`}>
        <button>Edit</button>
      </Link>
    </Fragment>
  )

  return (
    <Layout>
      <h4>{joke.title}</h4>
      <p>{joke.text}</p>
      <p>written by: {joke.owner}</p>
      { user ? authenticatedOptions : '' }
      <Link to="/jokes">Back to all Jokes</Link>
    </Layout>
  )
}

export default Joke

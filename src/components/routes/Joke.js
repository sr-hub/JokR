import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'

const Joke = props => {
  const [joke, setJoke] = useState(null)
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/jokes/${props.match.params.id}`)
      .then(res => setJoke(res.data.joke))
      .catch(console.error)
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/jokes/${props.match.params.id}`,
      method: 'DELETE'
    })
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

  return (
    <Layout>
      <h4>{joke.title}</h4>
      <p>Date relased: {joke.year}</p>
      <p>Directed by: {joke.director}</p>
      <button onClick={destroy}>Delete Joke</button>
      <Link to={`/jokes/${props.match.params.id}/edit`}>
        <button>Edit</button>
      </Link>
      <Link to="/jokes">Back to all Jokes</Link>
    </Layout>
  )
}

export default Joke

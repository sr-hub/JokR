import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'

const Jokes = props => {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/jokes`)
      .then(res => setJokes(res.data.jokes))
      .catch(console.error)
  }, [])

  const jokeArr = jokes.map(joke => (
    <li key={joke.id}>
      <Link to={`/jokes/${joke.id}`}>{joke.title}</Link>
    </li>
  ))

  return (
    <Layout>
      <h4>Jokes</h4>
      <ul>
        {jokeArr}
      </ul>
    </Layout>
  )
}
export default Jokes

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Layout from '../../shared/Layout'
import dadJokeApiUrl from '../../../dadJokeApiConfig'

const DadJoke = props => {
  const [joke, setJoke] = useState(null)
  // const [deleted, setDeleted] = useState(false)
  // const { user } = props

  useEffect(() => {
    axios({
      url: `${dadJokeApiUrl}`,
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => setJoke(res.data.joke))
      .catch(console.error)
  }, [])

  // const destroy = () => {
  //   axios({
  //     url: `${apiUrl}/jokes/${props.match.params.id}`,
  //     method: 'DELETE',
  //     headers: {
  //       'Authorization': `Bearer ${props.user.token}`
  //     }
  //   })
  //     .then(console.log(props))
  //     .then(() => setDeleted(true))
  //     .catch(console.error)
  // }

  if (!joke) {
    return <p>Loading...</p>
  }

  // if (deleted) {
  //   return <Redirect to={
  //     { pathname: '/', state: { msg: 'Joke successfully deleted!' } }
  //   } />
  // }

  // const authenticatedOptions = (
  //   <Fragment>
  //     <button onClick={destroy}>Delete Joke</button>
  //     <Link to={`/jokes/${props.match.params.id}/edit`}>
  //       <button>Edit</button>
  //     </Link>
  //   </Fragment>
  // )
  // { user && user._id === joke.owner ? authenticatedOptions : '' }

  return (
    <Layout>
      <h6>{joke.joke}</h6>
      <p>courtesy of: {joke.owner}</p>
      <Link to="/jokes">Back to all Jokes</Link>
    </Layout>
  )
}

export default DadJoke

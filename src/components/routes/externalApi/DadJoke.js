import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Layout from '../../shared/Layout'
import dadJokeApiUrl from '../../../dadJokeApiConfig'

const DadJokePage = props => {
  const [joke, setJoke] = useState(null)
  // const [deleted, setDeleted] = useState(false)
  const { alert } = props

  const getJoke = () => {
    axios({
      url: `${dadJokeApiUrl}`,
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => {
        setJoke(res.data.joke)
      })
      .then(() => alert({
        heading: 'Successfully Retrieved a Joke!',
        variant: 'success'
      }))
      .catch(error => {
        alert({
          heading: 'Couldn\'t Retrieve a Joke!',
          variant: 'danger'
        })
        throw (error)
      })
  }
  // const authenticatedOptions = (
  //   <Fragment>
  //     <button onClick={destroy}>Delete Joke</button>
  //     <Link to={`/jokes/${props.match.params.id}/edit`}>
  //       <button>Edit</button>
  //     </Link>
  //   </Fragment>
  // )
  // { user && user._id === joke.owner ? authenticatedOptions : '' }
  if (!joke) {
    return (
      <Layout>
        <p> Click the Button to Get a Joke</p>
        <button onClick = {getJoke}> Get a new Joke! </button>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <h6> {joke} </h6>
        <p> courtesy of: icanhazdadjoke.com </p>
        <button onClick = {getJoke} > Get a new Joke! < /button>
        <Link to = "/jokes" > Back to all Jokes < /Link>
      </Layout>
    )
  }
}

export default DadJokePage

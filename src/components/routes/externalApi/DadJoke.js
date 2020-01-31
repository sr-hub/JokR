import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
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
      <Layout user={props.user}>
        <p> Click the Button to Get a Joke</p>
        <button onClick = {getJoke} className="btn btn-outline-primary" data-toggle="button" aria-pressed="false" autoComplete="off"> Get a new Joke! </button>
      </Layout>
    )
  } else {
    return (
      <Layout user={props.user}>
        <h6 className="text-center border border-info border-top border-bottom align-middle"> {joke} </h6>
        <p style={{ fontSize: 5 }}> courtesy of: icanhazdadjoke.com </p>
        <button onClick = {getJoke} className="btn btn-outline-primary" data-toggle="button" aria-pressed="false" autoComplete="off"> Get a new Joke! < /button>
      </Layout>
    )
  }
}

export default DadJokePage

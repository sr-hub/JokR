import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import JokeForm from '../shared/JokeForm'
import Layout from '../shared/Layout'
import messages from '../AutoDismissAlert/messages'

const JokeCreate = props => {
  const [joke, setJoke] = useState({ title: '', text: '' })
  const [createdJokeId, setCreatedJokeId] = useState(null)
  const { alert } = props
  const handleChange = event => {
    event.persist()
    // const updatedField = { [event.target.name]: event.target.value }
    //
    // const editedMovie = Object.assign(joke, updatedField)

    setJoke({ ...joke, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/jokes/create-joke`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      },
      data: { joke }
    })
      .then(res => setCreatedJokeId(res.data.joke._id))
      .then(() => alert({
        heading: 'Successfully Created a Joke!',
        message: messages.signInSuccess,
        variant: 'success'
      }))
      .catch(error => {
        alert({
          heading: 'Joke Creation Failed!',
          message: messages.signInFailure,
          variant: 'danger'
        })
        throw (error)
      })
  }

  if (createdJokeId) {
    return <Redirect to={`/jokes/${createdJokeId}`} />
  }

  return (
    <Layout>
      <JokeForm
        joke={joke}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/"
      />
    </Layout>
  )
}
export default JokeCreate

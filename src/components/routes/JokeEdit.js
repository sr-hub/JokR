import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import JokeForm from '../shared/JokeForm'
import Layout from '../shared/Layout'
import messages from '../AutoDismissAlert/messages'

const JokeEdit = props => {
  const [joke, setJoke] = useState({ title: '', text: '' })
  const [updated, setUpdated] = useState(false)
  const { alert } = props

  useEffect(() => {
    axios(`${apiUrl}/jokes/${props.match.params.id}`)
      .then(res => setJoke(res.data.joke))
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()
    setJoke({ ...joke, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/jokes/${props.match.params.id}/edit`,
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      },
      data: { joke }
    })
      .then(() => setUpdated(true))
      .then(() => alert({
        heading: 'Successfully Edited a Joke!',
        message: messages.jokeEditSuccess,
        variant: 'success'
      }))
      .catch(error => {
        alert({
          heading: 'Joke Edit Failed',
          message: messages.jokeEditFailure,
          variant: 'danger'
        })
        throw (error)
      })
  }

  if (updated) {
    return <Redirect to={`/jokes/${props.match.params.id}`} />
  }

  return (
    <Layout>
      <JokeForm
        joke={joke}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/jokes/${props.match.params.id}`}
      />
    </Layout>
  )
}

export default JokeEdit

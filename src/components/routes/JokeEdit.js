import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import JokeForm from '../shared/JokeForm'
import Layout from '../shared/Layout'

const JokeEdit = props => {
  const [joke, setJoke] = useState({ title: '', text: '' })
  const [updated, setUpdated] = useState(false)

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
      url: `${apiUrl}/jokes/${props.match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      },
      data: { joke }
    })
      .then(() => setUpdated(true))
      .catch(console.error)
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

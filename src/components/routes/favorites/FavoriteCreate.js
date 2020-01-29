import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../../apiConfig'
import JokeForm from '../../shared/JokeForm'
import Layout from '../../shared/Layout'
import messages from '../../AutoDismissAlert/messages'

const FavoriteCreate = props => {
  const [favorite, setFavorite] = useState({ title: '', text: '' })
  const [createdFavoriteId, setFavoriteId] = useState(null)
  const { alert } = props
  const handleChange = event => {
    event.persist()
    // const updatedField = { [event.target.name]: event.target.value }
    //
    // const editedMovie = Object.assign(favorite, updatedField)

    setFavorite({ ...favorite, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/jokes/create-favorite`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      },
      data: { favorite }
    })
      .then(res => setFavoriteId(res.data.favorite._id))
      .then(() => alert({
        heading: 'Successfully Saved Joke as Favorite!',
        message: messages.favoriteCreateSuccess,
        variant: 'success'
      }))
      .catch(error => {
        alert({
          heading: 'Faled to Save Joke as a Favorite!',
          message: messages.favoriteCreateFailure,
          variant: 'danger'
        })
        throw (error)
      })
  }

  if (createdFavoriteId) {
    return <Redirect to={`/jokes/${createdFavoriteId}`} />
  }

  return (
    <Layout>
      <JokeForm
        favorite={favorite}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/"
      />
    </Layout>
  )
}
export default FavoriteCreate

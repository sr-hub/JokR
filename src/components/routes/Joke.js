import React, { Fragment, useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'
import messages from '../AutoDismissAlert/messages'

const Joke = props => {
  const [joke, setJoke] = useState(null)
  const [deleted, setDeleted] = useState(false)
  const [saved, setSaved] = useState(false)
  const { user, alert } = props

  useEffect(() => {
    axios(`${apiUrl}/jokes/${props.match.params.id}`)
      .then(res => {
        setJoke(res.data.joke)
        setSaved()
      })
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

  const saveFave = () => {
    axios({
      url: `${apiUrl}/favorites/create-favorite`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      },
      data: {
        favorite: {
          joke: joke._id,
          listOwner: user._id,
          isThirdParty: false
        }
      }
    })
      .then(() => setSaved(true))
      .then(() => alert({
        heading: 'Successfully Saved a Joke as a Favorite!',
        message: messages.jokeFaveSuccess,
        variant: 'success'
      }))
      .catch(error => {
        alert({
          heading: 'Failed to Save the Joke to Your Favorites!',
          message: messages.jokeFaveFailure,
          variant: 'danger'
        })
        throw (error)
      })
  }

  const unSaveFave = () => {
    axios({
      url: `${apiUrl}/favorites/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(() => setSaved(false))
      .catch(error => {
        alert({
          heading: 'Failed to Remove the Joke to Your Favorites!',
          message: messages.jokeUnSaveFaveFailure,
          variant: 'danger'
        })
        throw (error)
      })
  }

  const authenticatedOptions = (
    <Fragment>
      { !saved ? <button onClick={saveFave} className="btn btn-outline-primary" data-toggle="button" aria-pressed="false" autoComplete="off">Save as Favorite </button>
        : <button onClick={unSaveFave} className="btn btn-outline-warning" data-toggle="button" aria-pressed="false" autoComplete="off">Remove from Favorites </button> }
      <Link to={`/jokes/${props.match.params.id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={destroy} className="btn btn-outline-danger" data-toggle="button" aria-pressed="false" autoComplete="off">Delete Joke</button>
    </Fragment>
  )

  return (
    <Layout>
      <p className="text-left">title: {joke.title} </p>
      <p className="text-center border border-info border-top align-middle">{joke.text}</p>
      <p>written by: {joke.owner}</p>
      { user && user._id === joke.owner ? authenticatedOptions : '' }
      <Link to="/jokes">Back to all Jokes</Link>
    </Layout>
  )
}

export default Joke

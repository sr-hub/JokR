import React, { Fragment, useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../../apiConfig'
import Layout from '../../shared/Layout'

const Favorite = props => {
  const [favorite, setFavorites] = useState(null)
  const [deleted, setDeleted] = useState(false)
  const { user, alert } = props

  useEffect(() => {
    axios(`${apiUrl}/favorites/${props.match.params.id}`)
      .then(res => setFavorites(res.data.favorite))
      .catch(console.error)
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/favorites/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(() => setDeleted(true))
      .then(() => alert({
        heading: 'Successfully Deleted your a Joke!',
        variant: 'success'
      }))
      .catch(error => {
        alert({
          heading: 'Couldn\'t Delete your Joke!',
          variant: 'danger'
        })
        throw (error)
      })
  }

  if (!favorite) {
    return <p>Loading...</p>
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/', state: { msg: 'Favorite successfully deleted!' } }
    } />
  }

  const authenticatedOptions = (
    <Fragment>
      <button onClick={destroy}>Delete Favorite</button>
      <Link to={`/favorites/${props.match.params.id}/edit`}>
        <button>Edit</button>
      </Link>
    </Fragment>
  )

  return (
    <Layout>
      <h4>{favorite.title}</h4>
      <p>{favorite.text}</p>
      <p>written by: {favorite.owner}</p>
      { user && user._id === favorite.owner ? authenticatedOptions : '' }
      <Link to="/favorites">Back to all Jokes</Link>
    </Layout>
  )
}

export default Favorite

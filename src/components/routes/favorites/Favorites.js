import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../../apiConfig'
import Layout from '../../shared/Layout'

const Favorites = props => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    axios({
      url: `${apiUrl}/favorites`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(res => {
        setFavorites(res.data.favorites)
      })
      .catch(console.error)
  }, [])

  const favoriteArr = favorites.map(favorite => (
    <li className="list-group-item" key={favorite._id}>
      <Link to={`/jokes/${favorite.joke._id}`}>{favorite.joke.title}</Link>
    </li>
  ))

  return (
    <Layout user={props.user}>
      <h4>Favorites</h4>
      <ul className="list-group list-group-flush">
        {favoriteArr}
      </ul>
    </Layout>
  )
}
export default Favorites

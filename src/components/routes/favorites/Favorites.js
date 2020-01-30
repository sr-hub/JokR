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
        console.log('res', res)
        console.log('faves before setFaves', favorites)
        setFavorites(res.data.favorites)
        console.log('faves after setFaves', favorites)
      })
      .catch(console.error)
  }, [])

  const favoriteArr = favorites.map(favorite => (
    <li key={favorite._id}>
      <Link to={`/favorites/${favorite._id}`}>{favorite.title}</Link>
    </li>
  ))

  return (
    <Layout>
      <h4>Favorites</h4>
      <ul>
        {favoriteArr}
      </ul>
    </Layout>
  )
}
export default Favorites

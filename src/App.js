import React from 'react'
import { Route, withRouter } from 'react-router-dom'

import Movies from './components/routes/Movies'
import Movie from './components/routes/Movie'
import MovieEdit from './components/routes/MovieEdit'
import MovieCreate from './components/routes/MovieCreate'
import Home from './components/routes/Home'

const App = props => (
  <React.Fragment>
    <h3>{props.location.state ? props.location.state.msg : null}</h3>
    <Route exact path='/' component={Home} />
    <Route exact path='/movies' component={Movies} />
    <Route exact path='/create-movie' component={MovieCreate} />
    <Route exact path='/movies/:id' component={Movie} />
    <Route exact path='/movies/:id/edit' component={MovieEdit} />
  </React.Fragment>
)

export default withRouter(App)

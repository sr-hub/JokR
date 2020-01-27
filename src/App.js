import React from 'react'
import { Route, withRouter } from 'react-router-dom'

import Jokes from './components/routes/Jokes'
import Joke from './components/routes/Joke'
import JokeEdit from './components/routes/JokeEdit'
import JokeCreate from './components/routes/JokeCreate'
import Home from './components/routes/Home'

const App = props => (
  <React.Fragment>
    <h3>{props.location.state ? props.location.state.msg : null}</h3>
    <Route exact path='/' component={Home} />
    <Route exact path='/jokes' component={Jokes} />
    <Route exact path='/create-joke' component={JokeCreate} />
    <Route exact path='/jokes/:id' component={Joke} />
    <Route exact path='/jokes/:id/edit' component={JokeEdit} />
  </React.Fragment>
)

export default withRouter(App)

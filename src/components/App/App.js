import React, { useState } from 'react'
import { Route, withRouter } from 'react-router-dom'

import Jokes from '../routes/Jokes'
import Joke from '../routes/Joke'
import JokeEdit from '../routes/JokeEdit'
import JokeCreate from '../routes/JokeCreate'
import Favorite from '../routes/favorites/Favorite'
import Favorites from '../routes/favorites/Favorites'
import FavoriteCreate from '../routes/favorites/FavoriteCreate'
import DadJokePage from '../routes/externalApi/DadJoke'
import Home from '../routes/Home'
import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
// import Nav from '../shared/Nav'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'

const App = props => {
  const [user, setUser] = useState(null)
  const [alerts, setAlerts] = useState([])

  const clearUser = () => setUser(null)

  const alert = ({ heading, message, variant }) => {
    setAlerts([...alerts, { heading, message, variant }])
  }

  return (
    <React.Fragment>
      <Header user={user} />
      {alerts.map((alert, index) => (
        <AutoDismissAlert
          key={index}
          heading={alert.heading}
          variant={alert.variant}
          message={alert.message}
        />
      ))}
      <main className="container">
        <h3>{props.location.state ? props.location.state.msg : null}</h3>
        <Route exact path='/' user={user} render={({ match }) => (
          <Home user={user} match={match}/>
        )} />
        <Route exact path='/jokes' render={() => (
          <Jokes/>
        )} />
        <Route exact path='/get-jokes' render={({ match }) => (
          <DadJokePage user={user} match={match}/>
        )} />
        <Route exact path='/jokes/:id' render={({ match }) => (
          <Joke user={user} match={match}/>
        )} />
        <AuthenticatedRoute user={user} path='/create-joke' render={({ match }) => (
          <JokeCreate match={match} alert={alert} user={user} />
        )} />
        <AuthenticatedRoute user={user} exact path='/jokes/:id/edit' render={({ match }) => (
          <JokeEdit match={match} alert={alert} user={user} />
        )} />
        <Route path='/sign-up' render={() => (
          <SignUp alert={alert} setUser={setUser} />
        )} />
        <Route path='/sign-in' render={() => (
          <SignIn alert={alert} setUser={setUser} />
        )} />
        <AuthenticatedRoute user={user} path='/sign-out' render={() => (
          <SignOut alert={alert} clearUser={clearUser} user={user} />
        )} />
        <AuthenticatedRoute user={user} path='/change-password' render={() => (
          <ChangePassword alert={alert} user={user} />
        )} />
        <AuthenticatedRoute exact path='/favorites/:id' render={({ match }) => (
          <Favorite user={user} match={match}/>
        )} />
        <AuthenticatedRoute user={user} path='/create-favorite' render={({ match }) => (
          <FavoriteCreate match={match} alert={alert} user={user} />
        )} />
        <AuthenticatedRoute user={user} exact path='/favorites' render={({ match }) => (
          <Favorites match={match} alert={alert} user={user} />
        )} />
      </main>
    </React.Fragment>
  )
}

export default withRouter(App)

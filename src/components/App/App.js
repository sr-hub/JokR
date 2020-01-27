import React from 'react'
import { Route, withRouter } from 'react-router-dom'

import Jokes from '../components/routes/Jokes'
import Joke from '../components/routes/Joke'
import JokeEdit from '../components/routes/JokeEdit'
import JokeCreate from '../components/routes/JokeCreate'
import Home from '../components/routes/Home'
import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'

const App = props => (
  <React.Fragment>
    <main className="container">
      <h3>{props.location.state ? props.location.state.msg : null}</h3>
      <Route exact path='/' component={Home} />
      <Route exact path='/' render={() => (
        <Jokes/>
      )} />
      <Route exact path='/jokes/:id' render={({ match }) => (
        <Joke user={user} match={match}/>
      )} />
      <AuthenticatedRoute user={user} path='/create-joke' render={() => (
        <JokeCreate alert={this.alert} user={user} />
      )} />
      <AuthenticatedRoute user={user} path='/jokes/:id/edit' render={({ match }) => (
        <JokeEdit match={match} alert={this.alert} user={user} />
      )} />
      <Route path='/sign-up' render={() => (
        <SignUp alert={this.alert} setUser={this.setUser} />
      )} />
      <Route path='/sign-in' render={() => (
        <SignIn alert={this.alert} setUser={this.setUser} />
      )} />
      <AuthenticatedRoute user={user} path='/sign-out' render={() => (
        <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
      )} />
      <AuthenticatedRoute user={user} path='/change-password' render={() => (
        <ChangePassword alert={this.alert} user={user} />
      )} />
    </main>
  </React.Fragment>
)

export default withRouter(App)

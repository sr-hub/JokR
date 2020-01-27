import React, { useState } from 'react'
import { Route, withRouter } from 'react-router-dom'

import Jokes from '../routes/Jokes'
import Joke from '../routes/Joke'
import JokeEdit from '../routes/JokeEdit'
import JokeCreate from '../routes/JokeCreate'
import Home from '../routes/Home'
import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'

// class App extends Component {
//   constructor () {
//     super()
//
//     state = {
//       user: null,
//       alerts: []
//     }
//   }
//
//   setUser = user => setState({ user })
//
//   clearUser = () => setState({ user: null })
//
//   alert = ({ heading, message, variant }) => {
//     setState({ alerts: [...state.alerts, { heading, message, variant }] })
//   }

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
        <Route exact path='/' component={Home} />
        <Route exact path='/jokes' render={() => (
          <Jokes/>
        )} />
        <Route exact path='/jokes/:id' render={({ match }) => (
          <Joke user={user} match={match}/>
        )} />
        <AuthenticatedRoute user={user} path='/create-joke' render={() => (
          <JokeCreate alert={alert} user={user} />
        )} />
        <AuthenticatedRoute user={user} path='/jokes/:id/edit' render={({ match }) => (
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
      </main>
    </React.Fragment>
  )
}

export default withRouter(App)

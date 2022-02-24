import Home from 'pages/home'
import Messenger from 'pages/messenger'
import Login from 'pages/sign/login'
import SignUp from 'pages/sign/signup'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/messenger/t" component={Messenger} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={SignUp} />
    </Switch>
  )
}

export default Routes

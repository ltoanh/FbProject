import Catalog from 'pages/catalog'
import Home from 'pages/home'
import Messenger from 'pages/messenger'

import React from 'react'

import { Route, Switch } from 'react-router-dom'

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/:catalog" exact component={Catalog}/>
      <Route path="/messenger/t"  component={Messenger} />
    </Switch>
  )
}

export default Routes

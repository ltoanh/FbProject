import Catalog from 'pages/catalog'
import Home from 'pages/home'

import React from 'react'

import { Route, Switch } from 'react-router-dom'

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/:catalog" component={Catalog}/>
    </Switch>
  )
}

export default Routes

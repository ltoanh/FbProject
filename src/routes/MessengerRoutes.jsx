import ChatArea from 'pages/messenger/chat-area'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

function MessengerRoutes() {
  return (
    <Switch>
      <Route path="/messenger/t/:id" exact component={ChatArea} />
    </Switch>
  )
}

export default MessengerRoutes

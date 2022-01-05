import ChatArea from 'pages/messenger/chat-area'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

function MessengerRoutes() {
  return (
    <Switch>
      <Route path="/:id" component={ChatArea} />
    </Switch>
  )
}

export default MessengerRoutes

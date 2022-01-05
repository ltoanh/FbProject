import { Divider } from '@mui/material'
import React from 'react'
import ChatItem from './ChatItem'
import ChatReceivedItem from './ChatReceivedItem'

function ChatGroupDaily() {
  return (
    <>
     <Divider style={{ fontSize: ".75rem" }}>03-01-2021</Divider>
      <ChatItem />
      <ChatReceivedItem />
    </>
  )
}

export default ChatGroupDaily

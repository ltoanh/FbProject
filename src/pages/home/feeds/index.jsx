import StoryReel from './story-reel';
import MessageSender from './message-sender';

import React from 'react'
import './feeds.css';

function Feeds() {
  return (
    <div className='feeds'>
      <StoryReel />
      <MessageSender />
    </div>
  )
}

export default Feeds

import StoryReel from './story-reel';
import MessageSender from './message-sender';
import Posts from './posts';

import React from 'react'
import './feeds.css';

function Feeds() {
  return (
    <div className='feeds'>
      <StoryReel />
      <MessageSender />
      <Posts />
    </div>
  )
}

export default Feeds

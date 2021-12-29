import Advertisement from 'components/advertisement'
import Contact from './contact'

import React from 'react'
import './widgets.css'

function Widgets() {
  return (
    <div className='widgets sidebar'>
      <Advertisement 
        title="Happy new year 2022"
        imageSrc="https://images.pexels.com/photos/9036980/pexels-photo-9036980.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <Contact />
    </div>
  )
}

export default Widgets

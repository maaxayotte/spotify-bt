import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

const EventTile = ({ event }) => {
  const [ shouldRedirect, setShouldRedirect] = useState(false)

  if (shouldRedirect) {
    <Redirect to={`/events/${event.id}`} />
  }

  const viewEvent = () => {
    
  }

  return (
    <div>
        <ul>
          <li>
            Event name:
            <strong>{event.name}</strong>
          </li>
          <li>
            Event date:
            <strong>{event.date}</strong>
          </li>
        </ul>

        <input 
          onClick={viewEvent}
          type='button'
          value='View Event'
        />
    </div>
  )
}

export default EventTile

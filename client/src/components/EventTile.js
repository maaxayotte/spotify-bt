import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const EventTile = ({ event }) => {
  const [ shouldRedirect, setShouldRedirect] = useState(false)

  const viewEvent = () => {
    setShouldRedirect(true)
  }

  if (shouldRedirect) {
    return <Redirect to={`/events/${event.id}`} />
  }

  return (
    <div>
        <ul>
          <strong>{event.name}</strong>
        </ul>
        <ul>
          <strong>{event.date}</strong>
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

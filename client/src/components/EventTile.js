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
    <div className='individual-tile'>
      <div>
      <ul className='tile-name'>
          <strong>{event.name}</strong>
        </ul>
      </div>
      <div className='date-btn'>
        <ul>
          <strong>{event.date}</strong>
        </ul>
        <div>
          <input 
            className='button success'
            id='submit-btn'
            onClick={viewEvent}
            type='button'
            value='View Event'
          />  
        </div>
      </div>
    </div>
  )
}

export default EventTile
